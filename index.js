const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const connectDb = require("./server/db/db");
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to readHub");
});

app.use(express.json());

app.use("/routes/auth", require("./server/routes/auth"));
app.use("/routes/profile", require("./server/routes/profile"));

Promise.all([connectDb])
  .then(() =>
    app.listen(port, () => {
      console.log(`readHub listening on port ${port}`);
    })
  )
  .catch((error) => {
    console.error(`MongoDB Atlas Error: ${error}`);
    process.exit();
  });
