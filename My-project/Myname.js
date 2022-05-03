const express = require("express");
const app = express();
app.get("/name", (req, res) => {
  if (req.url === "/name") {
    return;
  }
});
