import app from "./app.js";

app.listen(process.env.PORT, (req, res) => {
  console.log(`App running at ${process.env.PORT}`);
});
