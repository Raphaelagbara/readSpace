const express = require("express");
const app = express();
const { response } = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from profile");
});

module.exports = router;
