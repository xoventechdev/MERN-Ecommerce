import express from "express";
import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import path from "path";
import cookieParser from "cookie-parser";
import apiRoutes from "./src/routes/APIRoutes.js"


const app = express();
app.use(hpp());
app.use(helmet());
app.use(cors());
app.use(cookieParser());

const requestLimit = rateLimit({ windowMs: 1000 * 60 * 15, limit: 1000 });
app.use(requestLimit);


app.use("/api/v1",apiRoutes)
app.use("/", (req, res) =>{
  res.json({status: 200, body:"Vai"})
});

//Connect to Frontend
// app.use(express.static("client/dist"));
// app.use("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/dist/index.html"));
// });

export default app;
