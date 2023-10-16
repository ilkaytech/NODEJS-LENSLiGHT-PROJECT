import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("index sayfası");
});

app.listen(port, () => {
  console.log("Application running on port ${port}");
});
