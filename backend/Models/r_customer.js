const express= require("express")
const controller= require("../Controllers/customer.js")

const app= express.Router()

app.get("/",controller.getcustomer)
app.get("/:id",controller.getcustomer)
app.post("/",controller.addcustomer)
app.put("/:id",controller.updatecustomer)
app.delete("/:id",controller.deletecustomer)

module.exports=app
