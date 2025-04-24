const express = require("express");
const controller = require("../Controllers/customerLogin.js");

const app = express.Router();

app.get("/:id", controller.getcustomerData);
app.post("/", controller.getcustomerLogin);
app.put("/update-password",controller.updatepassword)

module.exports = app;