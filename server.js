const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/signup", (req, res) => {
  const { user, email } = req.body;
  console.log("New signup:", user, email);
  res.json({ message: "Signup successful!", user, email });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`FM.Pi backend running on port ${PORT}`);
});
S
