import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
    .then(() => {
  console.log("connected to database");
    })
    .catch((err) => {
        console.log(err);
    });

mongoose.connect(process.env.MONGO);

const app = express();

app.listen(3000, () => {
  console.log("server Listening on port 3000!");
});
