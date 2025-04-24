const db = require("../db.js");

const getadmin = (req, res) => {
      console.log("call function");
      let query = "SELECT * FROM `admin`";

  db.query(query, (err, data) => {
if (err) {  
  console.log(err)
      return res.json(err);
    } else {
      console.log(data);
      return res.json(data);
    }
  });
};

  const getAdmin = (req, res) => {
    let query = "SELECT * FROM `admin` WHERE admin_id=?"

    db.query(query, [req.params.id], (err, data) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(data[0]);
      }
    });
  };

const addadmin = (req, res) => {
  let query =
    "INSERT INTO `admin`(`admin_name`, `email_id`, `mobile_number`,`boook_image`,`password`, `company`, `address`) VALUES (?)"

  const values = [
    req.body.admin_name,
    req.body.email_id,
    req.body.mobile_number,
    req.file?.filename || '',
    req.body.password,
    req.body.company,
    req.body.address
    // new Date(),
    // req.body.entry_by || 1,
    // req.body.entry_by_role || 1,
    
  ];
  console.log("values == > ",values);
  
  db.query(query, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    } else {
      return res.json("Admin data inserted successfully");
    }
  });
};

const updateadmin = (req, res) => {
  let query =
    "UPDATE `admin` SET `admin_name`=?,`email_id`=?,`mobile_number`=?,`boook_image`=?,`password`=? ,`company`=?, `address`=? WHERE admin_name=?"
  const values = [
    req.body.admin_name,
    req.body.email_id,
    req.body.mobile_number,
    req.body.book_image,
    req.body.password,
    req.body.company,
    req.body.address
    // req.body.status
    // req.body.entry_date,
    // req.body.update_date,
    // req.body.entry_by,
    // req.body.entry_by_role,
  ];
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json("Admin data updated successfully");
    }
  });
};

const deleteadmin = (req, res) => {
  let query = "DELETE FROM `admin`  WHERE admin_id=?"
  db.query(query, [req.params.id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json("Admin data deleted successfully");
    }
  });
};

module.exports = { getadmin, getAdmin, addadmin, updateadmin, deleteadmin };
