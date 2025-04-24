const express= require("express")
const controller= require("../Controllers/admin.js")
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

app.get("/",controller.getadmin)
app.get("/:id",controller.getAdmin)
app.post("/",upload.single("book_image"),controller.addadmin)
app.put("/:id",upload.single("book_image"),controller.updateadmin)
app.delete("/:id",controller.deleteadmin)

module.exports=app
