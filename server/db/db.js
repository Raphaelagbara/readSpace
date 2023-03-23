const mongoose = require("mongoose");
const config = require("config");

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://ralphagbara:D8fnpN8QWTpiOK3J@cluster0.k3vhkk7.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const connectDb = mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    // Start the server
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB Atlas", error);
  });
module.exports = connectDb;
