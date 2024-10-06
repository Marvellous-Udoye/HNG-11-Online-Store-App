import { express } from 'express';

const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // Make sure the protocol matches (http/https)
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Example route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const PORT = 5000; // You can use any port you prefer
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
