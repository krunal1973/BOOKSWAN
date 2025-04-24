const mysql=require('mysql')

const db=mysql.createConnection({
    database:'books',
    host:'localhost',
    user:'root',
    password:''
})

module.exports=db