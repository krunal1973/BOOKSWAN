const express= require("express")
const controller= require("../Controllers/book.js")
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

app.get("/",controller.getbook)
app.get("/:id",controller.getBook)
app.post("/",upload.single("book_image"),controller.addbook)
app.put("/:id",upload.single("book_image"),controller.updatebook)
app.delete("/:id",controller.deletebook)

module.exports=app