const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/jobSearchPlatform", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Check for connection errors
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define your routes and middleware here

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
