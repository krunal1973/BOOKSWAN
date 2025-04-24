const express= require("express")
const controller= require("../Controllers/adminLogin.js")

const app= express.Router()

app.post("/",controller.getadminLogin)

app.put("/update-password",controller.updateAdminPassword);
module.exports=app