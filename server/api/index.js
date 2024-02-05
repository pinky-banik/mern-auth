import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';

import userRoutes from './routes/userRoute.js';
import authRoutes from './routes/authRoute.js';

dotenv.config()



mongoose.connect(process.env.MONGO)
    .then(() => {
    console.log("connected to database");
      })
      .catch((err) => {
          console.log(err);
      });

const app = express();
app.use(cors())

app.use(express.json());

app.listen(3000, () => {
  console.log("server Listening on port 3000!");
});


app.use("/api/users",userRoutes)
app.use("/api/auth", authRoutes)


app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal server error'
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode
  })
})
