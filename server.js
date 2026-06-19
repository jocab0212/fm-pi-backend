const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json()); // parse JSON bodies
app.use(cors());         // allow requests from Netlify frontend

// Existing routes...
app.get("/", (req, res) => {
  res.send("Welcome to FM.Pi Backend 🎶");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from FM.Pi backend!" });
});

app.get("/api/music", (req, res) => {
  res.json([
    { id: 1, title: "Pi Anthem", artist: "DJ Pi" },
    { id: 2, title: "Crypto Beats", artist: "BlockChain Band" },
    { id: 3, title: "FM.Pi Theme", artist: "Community Crew" }
  ]);
});

// ✅ Signup route
app.post("/signup", (req, res) => {
  const { user, email } = req.body;
  console.log("New signup:", user, email);
  res.json({ message: "Signup successful!", user, email });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`FM.Pi backend running on port ${PORT}`);
});
