import express from "express";
import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import path from "path";

const app = express();
app.use(hpp());
app.use(helmet());
app.use(cors());

const requestLimit = rateLimit({ windowMs: 1000 * 60 * 15, limit: 100 });
app.use(requestLimit);

//Connect to Frontend
app.use(express.static("client/dist"));
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});

export default app;
