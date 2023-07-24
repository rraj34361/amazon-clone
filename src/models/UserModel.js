const mongoose = require("mongoose");
  const objectId = mongoose.Types.ObjectId
const UserSchema = new mongoose.Schema(
  {
    name : {type : String },
    email: { type:String,  lowercase : true, unique: true }, //valid email
    phone: { type:String,  unique: true }, //valid indian type:Number
    password: { type:String, required: true, min: 8, max: 15 },
    orders : {
      type : [
       { type : objectId, ref : "order"}
      ],
    },
    cart : {
      type : objectId,
      ref : 'cart'
    }
  },
  { timestamps : true }
);

module.exports = mongoose.model("user", UserSchema);
