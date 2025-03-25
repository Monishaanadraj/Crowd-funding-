const mysql = require('mysql2')
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'crowd_funding',
    password:'Monisha@200328'

})

connection.connect((err)=>{
    if(err)console.log(err);
    console.log("connected to crowdfunding DB");
})

module.exports = connection