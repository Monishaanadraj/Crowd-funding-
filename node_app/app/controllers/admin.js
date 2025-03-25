const { response } = require("express");
const express = require("express")
const router = express.Router()
const db = require("../../config/db")

//Admin Login

router.post("/adminlogin", (req, res) => {
    console.log("Inside login", req.body);
    const { email, password } = req.body
    //to check if the entered name and password exists in the table
    const sql = `SELECT * FROM admin_login WHERE admin_email='${email}' AND admin_password='${password}'`
    db.query(sql, (err, result) => {
        if (err) throw err

        if (result.length > 0) res.status(200).send(result)
        else res.status(404).send(result)
    })
})


// router.get("/getAllReservation", (req, res) => {
//     const sql = "SELECT * FROM reservation"
//     db.query(sql, (err, result) => {
//         if (err) throw err

//         res.status(200).send(result)
//     })
// })

// router.put("/confirmReservation/:orderId", (req, res) => {
//     console.log("Update", req.body);
//     const sql = `UPDATE reservation SET status='CONFIRMED' WHERE reservationId ='${req.params.orderId}'`
//     db.query(sql, (err, result) => {
//         if (err) throw err
//         res.status(200).send(result)
//     })
// })

// router.put("/cancelReservation/:orderId", (req, res) => {
//     const sql = `UPDATE reservation SET status='CANCELLED' WHERE reservationId = '${req.params.orderId}'`
//     db.query(sql, (err, result) => {
//         if (err) throw err
//         res.status(200).send(result)
//     })
// })


router.post("/New_info", (req, res) => {
    console.log("Inside Details", req.body);
    const { NewName, description, price, Category, file, userId } = req.body
    const sql = `INSERT INTO details(name,description,price,Category,file,userId) 
    VALUES('${NewName}','${description}','${price}','${Category}','${file}','${userId}')`

    db.query(sql, (err, dbresult) => {
        if (err) throw err

        res.status(200).send("Success")
    })
})

router.get("/getAlldetails", (req, res) => {
    const sql = "SELECT * FROM details"
    db.query(sql, (err, result) => {
        if (err) throw err

        res.status(200).send(result)
    })

})


router.get("/getSelectedDetails/${detailsid}", (req, res) => {
    const sql = `SELECT * FROM details WHERE detailsid='${req.params.detailsid}'`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })
})

router.put("/updateDetails", (req, res) => {
    console.log("Updated Details", req.body);
    const { name, description, price, category, file, detailsid } = req.body
    const sql = `UPDATE details SET name ='${name}', description ='${description}', price ='${price}', category ='${category}',file='${file}'  WHERE detailsid ='${detailsid}'`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })
})

router.delete("/deletedetails/:detailsid", (req, res) => {
    const sql = `DELETE FROM details WHERE detailsid = '${req.params.detailsid}'`
    db.query(sql, (err, result) => {
        const sql1 = " SELECT * from details"
        db.query(sql1, (err, result1) => {
            res.status(200).send(result1)
        })
    })
})



// router.get("/getAllOrder", (req, res) => {
//     const sql = "SELECT * FROM orders"
//     db.query(sql, (err, result) => {
//         if (err) throw err

//         res.status(200).send(result)
//     })

// })

// router.put("/confirmOrder/:userId", (req, res) => {
//     console.log("Update", req.body);
//     const sql = `UPDATE orders SET status='CONFIRMED' WHERE orderid ='${req.params.userId}'`
//     db.query(sql, (err, result) => {
//         if (err) throw err
//         res.status(200).send(result)
//     })
// })

// router.put("/cancelOrder/:userId", (req, res) => {
//     const sql = `UPDATE orders SET status='CANCELLED' WHERE orderid = '${req.params.userId}'`
//     db.query(sql, (err, result) => {
//         if (err) throw err
//         res.status(200).send(result)
//     })
// })

module.exports = router