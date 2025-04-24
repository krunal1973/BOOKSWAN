const db = require("../db.js");

const getadminLogin = (req, res) => {
      console.log("call function");
      let query = `SELECT * FROM admin WHERE email_id='${req?.body?.email_id}' AND password='${req?.body?.password}'`;

  db.query(query, (err, data) => {
if (err) {  
  console.log(err)
      return res.json(err);
    } else if(data.length == 0){
        return res.json("Invalid username and password");
    }else{
        console.log(data);
        return res.json(data[0]);
    }
  
    
  });
};


const updateAdminPassword = (req, res) => {
  let query =`SELECT * FROM admin  WHERE 	admin_id =?` ;
  let admin = null;
  db.query(query, req.body.id, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      admin = data[0];
      if (admin && admin.password === req.body.currentpassword) {
        if (req.body.newPassword === req.body.reEnterPassword) {
          admin.password = req.body.newPassword;
          let updatePasswordQuery =
            "UPDATE admin SET password=? WHERE admin_id=?";
          db.query(
            updatePasswordQuery,
            [req.body.newPassword, req.body.id],
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
module.exports={
    getadminLogin,updateAdminPassword
}