"use strict";
/* ---------------
    Node.JS lenslight project
-------------------------------- */
const express = require("express");
const app = express();

// envVariables to process.env:
require("dotenv").config();
const PORT = process.env?.PORT || 8080;

// EJS Templates Engine
app.set("view engine", "ejs");

// Static Files Middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));
