import express from "express";
import hpp from "hpp";
import helmet from "helmet";
import mongoose from "mongoose";
import cors from "cors";
import rateLimit from "express-rate-limit";
import path from "path";
import cookieParser from "cookie-parser";
import apiRoutes from "./src/routes/APIRoutes.js";
import dotenv from "dotenv";

const app = express();
app.use(hpp());
app.use(helmet());
app.use(cors());
app.use(cookieParser());
dotenv.config();
app.use(express.json());
// app.use(bodyParser.json());

const requestLimit = rateLimit({ windowMs: 1000 * 60 * 15, limit: 1000 });
app.use(requestLimit);

app.use("/api/v1", apiRoutes);

//Database connection

mongoose
  .connect(process.env.MONGOSTRING)
  .then((res) => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });

//Connect to Frontend
// app.use(express.static("client/dist"));
// app.use("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/dist/index.html"));
// });

export default app;
