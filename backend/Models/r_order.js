const express= require("express")
const controller= require("../Controllers/order.js")

const app= express.Router()

app.get("/",controller.getorder)
app.get("/:orderNumber",controller.getOrder)
app.post("/",controller.addorder)
app.put("/:id",controller.updateorder)
app.delete("/:id",controller.deleteorder)

module.exports=app