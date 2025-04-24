const express= require("express")
const controller= require("../Controllers/managecart.js")

const app= express.Router()

app.get("/",controller.getmanage_cart)
app.get("/:id",controller.getManage_cart)
app.post("/:id",controller.addmanage_cart)
app.put("/:id",controller.updatemanage_cart)
app.delete("/:id",controller.deletemanage_cart)

module.exports=app
