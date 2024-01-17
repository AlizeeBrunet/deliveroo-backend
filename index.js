const express = require("express");
const cors = require("cors");
const data = require("./assets/data");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  console.log("route/");
  res.status(200).json(data);
});

app.all("*", (req, res) => {
  console.log("route not found");
  res.status(404).json({ message: "Not Found" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server on fire 🔥");
});
