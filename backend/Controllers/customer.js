const db=require("../db.js")

const getcustomer = (req,res)=>{
    let query = "SELECT * FROM `customer`"

    db.query(query,(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
}

const getCustomer = (req,res)=>{
    let query = "SELECT * FROM `customer` WHERE customer_id=?"

    db.query(query,[req.params.id],(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
}

const addcustomer = (req,res) =>{
    let query = " INSERT INTO `customer`( `customer_name`, `customer_number`, `customer_email`, `customer_address`,`password`) VALUES (?)"
    
    const values=[
        
        req.body.customer_name,
        req.body.customer_number,
        req.body.customer_email,
        req.body.customer_address,
        req.body.password
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
            return res.json("customer data inserted successfully")
        }
    })
}

const updatecustomer = (req,res) =>{
    let query = "UPDATE `customer` SET `customer_name`=?,`customer_number`=?,`customer_email`=?,`customer_address`=?,`password`=? WHERE customer_id=?"
    const values=[
        
        req.body.customer_name,
        req.body.customer_number,
        req.body.customer_email,
        req.body.customer_address,
        req.body.password
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
            return res.json("customer data updated successfully")
        }
    })
}

const deletecustomer = (req,res) =>{
    let query = "DELETE FROM `customer` WHERE customer_id=?"
    db.query(query,[req.params.id],(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json("customer data deleted successfully")
        }
    })
}

module.exports={getcustomer,getCustomer,addcustomer,updatecustomer,deletecustomer}