"use strict";
/* ---------------
    Node.JS lenslight project
-------------------------------- */
import express from "express";
const app = express();
const port = 3000;

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
app.listen(port, () => {
  console.log(`Aplication running on port: ${port}`);
});
