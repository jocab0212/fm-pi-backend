const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("FM.Pi backend is running!");
});

app.post("/signup", (req, res) => {
  const { user, email } = req.body;
  console.log("New signup:", user, email);
  res.json({ status: "ok", message: "Signup received" });
});

app.listen(3000, () => {
  console.log("FM.Pi backend running on port 3000");
});
