const express = require("express");
const routes = require("./routes/routes")
const multer  = require('multer')
const mongoose = require('mongoose')
const { isValidObjectId } = mongoose;
require('dotenv').config()
const {MONGOURL} = process.env
const server = express();
const cors  = require('cors')
server.use(cors())
server.use(express.json());
server.use(express.urlencoded({extended : true}))
server.use(multer().any())
mongoose.connect(MONGOURL, {
    useNewUrlParser : true
}).then(()=>{
    console.log('mongoDb is connected')
}).catch((err)=> console.log(err.message))
 
console.log(isValidObjectId(undefined))

server.use("/",routes);

server.listen(5000,()=>{
    console.log("server started on port 5000")
})


// const express = require('express');
// const app = express();
// require('dotenv').config()
const stripe = require('stripe')("sk_test_51NVvi0SFGfzmmEts8nXKqBZ7ZLhLDxeDAdI7ILW9zYXVwZVmfro806foFV78L1YgW1nWureiKEpxNO82D4Ec3jYm001k3VeCIT");
// app.use(cors())
// app.use(express.json());

// // Create a payment intent
server.post('/payments/create', async (req, res) => {
  try {
    const { amount } = req.query;

    const paymentIntent = await stripe.paymentIntents.create({
        amount,
      currency: 'usd',
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message });
  }
});

// const port = 5000;
// app.listen(port, () => console.log(`Server running on port ${port}`));
