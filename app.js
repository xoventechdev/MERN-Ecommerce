import express from "express";
import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";

const app = express();
app.use(hpp());
app.use(helmet());
app.use(cors());

const requestLimit = rateLimit({ windowMs: 1000 * 60 * 15, limit: 100 });
app.use(requestLimit);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
