const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')

const app =express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/gripDB");

const bankSchema = new mongoose.Schema({
    username: {type:String,unique: true },
    accBalance: Number,
    photo: String,
});

const bankDetail = new mongoose.model("bankdetail", bankSchema);

app.get("/getdetails",(req,res)=>{
  bankDetail.find({},(err,details)=>{
    if(!err){
      res.status(200).json(details);
    }
  })
});

app.post("/transfermoney",(req,res)=>{
  const {sender,reciever,amount} = req.body;
  console.log(sender,reciever,amount);

  bankDetail.findOne({username:sender},(err,giver)=>{
    if(err){
      console.log("err");
      res.json({success:false,message:err});
      return;
    }
    giver.accBalance=Number(giver.accBalance)-amount;
    giver.save();
  })

  bankDetail.findOne({username:reciever},(err,taker)=>{
    if(err){
      console.log("err");
      res.json({success:false,message:err});
      return;
    }
    taker.accBalance=Number(taker.accBalance)+Number(amount);
    taker.save();
  })

})




app.listen("4000",()=>{
  console.log("server is running on port 4000");
});
