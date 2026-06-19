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

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from FM.Pi backend!" });
});

app.get("/", (req, res) => {
  res.send("Welcome to FM.Pi Backend 🎶");
});
app.get("/", (req, res) => {
  res.send("Welcome to FM.Pi Backend 🎶");
});

// Music route (sample data for now)
app.get("/api/music", (req, res) => {
  const sampleTracks = [
    { id: 1, title: "Pi Anthem", artist: "DJ Pi" },
    { id: 2, title: "Crypto Beats", artist: "BlockChain Band" },
    { id: 3, title: "FM.Pi Theme", artist: "Community Crew" }
  ];
  res.json(sampleTracks);
});

app.listen(3000, () => {
  console.log("FM.Pi backend running on port 3000");
});
