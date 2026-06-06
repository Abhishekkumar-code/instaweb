const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// React/Vite build serve karne ke liye
app.use(express.static(path.join(__dirname, "..", "dist")));

app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

module.exports = app;