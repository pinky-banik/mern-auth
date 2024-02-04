import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()


console.log(process.env.MONGO)
mongoose.connect(process.env.MONGO)
    .then(() => {
    console.log("connected to database");
      })
      .catch((err) => {
          console.log(err);
      });

const app = express();

app.listen(3000, () => {
  console.log("server Listening on port 3000!");
});
