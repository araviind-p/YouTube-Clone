import { config, configDotenv } from "dotenv";
import express from "express";
import mongoose from "mongoose"
import dotenv from 'dotenv';
dotenv.config();


const app = express()

app.get("/", (req, res) => {
    res.send("hello")
})

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("DB connected ✅");
})
.catch((err)=>{
    console.log(err);
})

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
})