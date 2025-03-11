import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { app } from "./app.js";

dotenv.config();

(async () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });

    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log("Connected to the database");
    app.on("error", () => {
      console.log("Error connecting to the database");
      throw error;
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
})();
