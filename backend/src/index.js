const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const { Ffmpeg } = require("@ffmpeg/ffmpeg");

const app = express();
const port = process.env.PORT || 3001;

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert("path/to/your/serviceAccountKey.json"),
});

app.use(cors());

// Add API endpoints here

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
app.post("/generate-film", async (req, res) => {
  // Implement your logic for generating films here
  res.json({ message: "Film generation successful" });
});
