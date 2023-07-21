
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe");
("sk_test_51NVvi0SFGfzmmEts8nXKqBZ7ZLhLDxeDAdI7"+
"ILW9zYXVwZVmfro806foFV78L1YgW1nWureiKEpxNO82D4Ec3jYm001k3VeCIT");

const app = express();

app.use(cors({origin: true}));

app.use(express.json());

app.get("/", (request, response)=> response.status(200).send("hello world"));
app.post("/payments/create", async (request, response)=>{
  const total = request.query.total;
  console.log("payment", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
