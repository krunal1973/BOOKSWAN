const express= require("express")
const controller= require("../Controllers/category.js")
const multer= require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./Images");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname );
    },
});
const upload = multer({ storage })
const app= express.Router()

app.get("/",controller.getcategory)
app.get("/:id",controller.getcategory)
app.post("/",upload.single("book_image"),controller.addcategory)
app.put("/:id",upload.single("book_image"),controller.updatecategory)
app.delete("/:id",controller.deletecategory)

module.exports=app
