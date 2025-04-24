const db = require("../db.js");

const getcustomerLogin = (req, res) => {
  let query = `SELECT * FROM customer WHERE customer_email='${req?.body?.customer_email}' AND password='${req?.body?.password}'`;

  db.query(query, (err, data) => {
    if (err) {
      return res.json(err);
    } else if (data.length == 0) {
      console.log(data?.length);

      return res.json({ msg: "Invalid username and password" });
    } else {
      console.log(data);
      return res.json(data[0]);
    }
  });
};

const getcustomerData = (req, res) => {
  let query = `SELECT * FROM coustomer WHERE coustomer_id=?`;

  db.query(query, req?.params?.id, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data[0]);
    }
  });
};

const updatepassword = (req, res) => {
  let query = `SELECT * FROM coustomer WHERE coustomer_id=?`;
  let user = null;
  db.query(query, req.body.id, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      user = data[0];
      if (customer && customer.password === req.body.currentpassword) {
        if (req.body.newpassword === req.body.reEnterpassword) {
          user.password = req.body.newpassword;
          let updatepasswordQuery =
            "UPDATE customer SET customer_email=? WHERE password=?";
          db.query(
            updatepasswordQuery,
            [req.body.newpassword, req.body.id],
            (err, data) => {
              if (err) {
                return res.json(err);
              } else {
                return res.json(data);
              }
            }
          );
        } else {
          return res.json({
            msg: "New Password and Re Enter New Password not Matched",
          });
        }
      } else {
        return res.json({ msg: "Your Current Password is incorrect" });
      }
    }
  });
};

module.exports = {
  getcustomerLogin,
  getcustomerData,
  updatepassword,
};
