const db=require("../db.js")

const getcategory = (req,res)=>{
    let query = "SELECT * FROM `category`"

    db.query(query,(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            console.log(data)
            return res.json(data)
        }
    })
}

const getCategory = (req,res)=>{
    let query = "SELECT * FROM `category` WHERE category_id=?"

    db.query(query,[req.params.id],(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return
            
            res.json(data)
        }
    })
}

const addcategory = (req,res) =>{
    let query = " INSERT INTO `category`(`category_id`, `category_name`,`boook_image`) VALUES (?)"
    const values=[
        req.body.category_id,
        req.body.category_name,
        req.file.filename
        // req.body.status,
        // req.body.entry_date,
        // req.body.update_date,
        // req.body.entry_by,
        // req.body.entry_by_role
    ]
    db.query(query,[values],(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json("category data inserted successfully")
        }
    })
}

const updatecategory = (req,res) =>{
 
    let query = "UPDATE `category` SET `category_id`=?,`category_name`=?,`boook_image`=? WHERE category_id=?"
    const values=[
        req.body.category_id,
        req.body.category_name,
        req.body.boook_image
        // req.body.status,
        // req.body.entry_date,
        // req.body.update_date,
        // req.body.entry_by,
        // req.body.entry_by_role
    ]
    db.query(query,[...values,req.params.id],(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json("category data updated successfully")
        }
    })
}

const deletecategory = (req,res) =>{
    let query = "DELETE FROM `category` WHERE category_id=?"
    db.query(query,[req.params.id],(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json("category data deleted successfully")
        }
    })
}

module.exports={getCategory,getcategory,addcategory,updatecategory,deletecategory}