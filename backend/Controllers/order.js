const db = require("../db.js");

const getorder = (req, res) => {
  let query = "SELECT * FROM `order`";

  db.query(query, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

const getOrder = (req, res) => {
  console.log("call function")
  let query = `
 SELECT * FROM \`order\` WHERE order_number = ?                       
` ;
  db.query(query, [req.params.orderNumber], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

const addorder = (req, res) => {
  const query = `
    INSERT INTO \`order\` (
      order_number,
      book_img,
      book_name,
      customer_id,
      customer_name,
      customer_email,
      customer_number,
      customer_address,
      quantity,
      total_price
    ) VALUES (?)`;

  const values = [
    req.body.order_number,
    req.body.book_img,
    req.body.book_name,
    req.body.customer_id,
    req.body.customer_name,
    req.body.customer_email,
    req.body.customer_number,
    req.body.customer_address,
    req.body.quantity,
    req.body.total_price,
    
  ];

  db.query(query, [values], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json({
        order_id: data?.insertId,
        message: "order data inserted successfully"
      });
    }
  });
};

const updateorder = (req, res) => {
  let query =
    "UPDATE `order` SET `order_id`=?,`book_id`=?,`customer_id`=?,`quantity`=?,`total_price`=? WHERE order_id=?";
  const values = [
    req.body.book_id,
    req.body.customer_id,
    // req.body.order_number,
    // req.body.customer_email,
    // req.body.customer_number,
    // req.body.customer_address,
    req.body.quantity,
    req.body.total_price,
    // req.body.status,
    // req.body.entry_date,
    // req.body.update_date,
    // req.body.entry_by,
    // req.body.entry_by_role
  ];
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json("order data updated successfully");
    }
  });
};

const deleteorder = (req, res) => {
  let query = "DELETE FROM `order` WHERE order_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json("order data deleted successfully");
    }
  });
};

module.exports = { getorder, getOrder, addorder, updateorder, deleteorder };
