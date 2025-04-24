const db=require("../db.js")

const getbook = (req,res)=>{
    let query = "SELECT * FROM `book`"

    db.query(query,(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
}

const getBook = (req,res)=>{
    let query = "SELECT * FROM `book` WHERE book_id=?"

    db.query(query,[req.params.id],(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
}

const addbook = (req,res) =>{
    let query = "INSERT INTO `book`( `book_name`, `book_category_id`, `book_publisher`, `book_author`, `book_description`, `publish_date`,`boook_image`,`amount`) VALUES (?)"
    
    const values=[
        
        req.body.book_name,
        req.body.book_category_id,
        req.body.book_publisher,
        req.body.book_author,
        req.body.book_description,
        req.body.publish_date,
        req.file.filename,
        req.body.amount
        
    ]
    db.query(query,[values],(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json("book data inserted successfully")
        }
    })
}

const updatebook = (req,res) =>{
    let query = "UPDATE `book` SET `book_name`=?,`book_category_id`=?,`book_publisher`=?,`book_author`=?,`book_description`=?,`publish_date`=?,`boook_image`=?,`amount`=? WHERE book_id=?"
    const values=[
        
        req.body.book_name,
        req.body.book_category_id,
        req.body.book_publisher,
        req.body.book_author,
        req.body.book_description,
        req.body.publish_date,
        req.body.book_image,
        req.body.amount
        
    ]
    db.query(query,[...values,req.params.id],(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json("book data updated successfully")
        }
    })
}

const deletebook = (req,res) =>{
    let query = "DELETE FROM `book` WHERE book_id=?"
    db.query(query,[req.params.id],(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json("book data deleted successfully")
        }
    })
}

module.exports={getbook,getBook,addbook,updatebook,deletebook}