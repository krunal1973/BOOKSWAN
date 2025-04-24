const db=require("../db.js")

const getmanage_cart = (req,res)=>{
    let query = "SELECT * FROM `manage_cart`"

    db.query(query,(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
}

const getManage_cart = (req,res)=>{
    let query = `
    SELECT 
      manage_cart.cart_id,
      manage_cart.customer_id,
      manage_cart.book_id,
      manage_cart.quantity,
      book.book_name,
      book.amount,
      book.boook_image
    FROM 
      manage_cart
    INNER JOIN 
      book 
    ON 
      manage_cart.book_id = book.book_id
    WHERE 
      manage_cart.customer_id = ?
  `;

    db.query(query,[req.params.id],(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
}

const addmanage_cart = (req,res) =>{
    let query = "INSERT INTO `manage_cart`(`cart_id`, `customer_id`, `book_id`, `book_name`, `quantity`, `amount`)  VALUES (?)"
    const values=[
        req.body.cart_id,
        req.body.customer_id,
        req.body.book_id,
        req.body.book_name,
        req.body.quantity,
        req.body.amount,
       
        // req.body.status,
        // req.body.entry_date,
        // req.body.update_date,
        // req.body.entry_by,
        // req.body.entry_by_role
    ]
    db.query(query,[values],(err,data)=>{
        if(err){
            console.log(err);
            return res.json(err)
        }else{
            return res.json("managecart data inserted successfully")
        }
    })
}

const updatemanage_cart = (req, res) => {
    const query = "UPDATE `manage_cart` SET quantity = ?, amount = ? WHERE cart_id = ?";
    const values = [
      req.body.quantity,
      req.body.amount,
      req.params.id
    ];
  
    db.query(query, values, (err, data) => {
      if (err) {
        console.error("Error updating manage_cart:", err);
        return res.status(500).json({ message: "Database error", error: err });
      } else {
        return res.json({ message: "manage_cart updated successfully", cart_id: req.params.id });
      }
    });
  };
  

const deletemanage_cart = (req,res) =>{
    let query = "DELETE FROM `manage_cart` WHERE cart_id=?"
    db.query(query,[req.params.id],(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json("managecart data deleted successfully")
        }
    })
}




module.exports={getmanage_cart,getManage_cart,addmanage_cart,updatemanage_cart,deletemanage_cart}