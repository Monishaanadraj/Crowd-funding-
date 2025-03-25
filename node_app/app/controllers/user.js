const express = require("express")
const router = express.Router()
const db = require("../../config/db")

router.post("/addNewUser", (req, res) => {
    console.log("inside user", req.body)
    const { email, password, username } = req.body
    const sql = `INSERT INTO user(username,emailId,password)  VALUES('${username}','${email}','${password}')`
    db.query(sql, (err, dbresult) => {
        if (err) throw err

        res.status(200).send(dbresult)
    })
})


router.post("/login", (req, res) => {
    console.log("Inside login", req.body);
    const { email, password } = req.body
    const sql = `SELECT * FROM user WHERE emailId='${email}' and password='${password}'`
    db.query(sql, (err, result) => {
        if (err) throw err

        if (result.length > 0) res.status(200).send(result)
        else res.status(404).send(result)
    })
})


router.put("/updatePassword/:email", (req, res) => {
    console.log("updated", req.body);
    const { email, newpassword } = req.body
    const sql = `UPDATE user SET password='${newpassword}' WHERE EmailID ='${email}'`

    db.query(sql, (err, dbresult) => {
        if (err) throw err
        res.status(200).send(dbresult)
    })
})

router.post("/addNewDonor", (req, res) => {
    console.log("inside user", req.body)
    const { email, password, username } = req.body
    const sql = `INSERT INTO donor(username,emailId,password)  VALUES('${username}','${email}','${password}')`
    db.query(sql, (err, dbresult) => {
        if (err) throw err
        res.status(200).send(dbresult)
    })
})


router.post("/donorLogin", (req, res) => {
    console.log("Inside login", req.body);
    const { email, password } = req.body
    const sql = `SELECT * FROM donor WHERE emailId='${email}' and password='${password}'`
    db.query(sql, (err, result) => {
        if (err) throw err
        if (result.length > 0) res.status(200).send(result)
        else res.status(404).send(result)
    })
})


router.put("/updateDonorPassword/:email", (req, res) => {
    console.log("updated", req.body);
    const { email, newpassword } = req.body
    const sql = `UPDATE donor SET password='${newpassword}' WHERE EmailID ='${email}'`

    db.query(sql, (err, dbresult) => {
        if (err) throw err
        res.status(200).send(dbresult)
    })
})



router.post("/message", (req, res) => {
    console.log("Inside message", req.body);
    const { name, email, message } = req.body
    const sql = `INSERT INTO user_contact(Name,EmailId,Message)  VALUES('${name}','${email}','${message}')`
    db.query(sql, (err, dbresult) => {
        if (err) throw err
        res.status(200).send(dbresult)
    })
})


// router.post("/makeReservation", (req, res) => {
//     console.log("Inside reservation", req.body);
//     const { name, email, phoneno, date, time, members,userId } = req.body
//     const sql = `INSERT INTO reservation(Name,EmailId,PhoneNumber,Date,Time,TotalMembers,userId)  
//     VALUES('${name}','${email}','${phoneno}','${date}','${time}','${members}','${userId}')`
//     db.query(sql, (err, dbresult) => {
//         if (err) throw err

//         res.status(200).send(dbresult)
//     })
// })


router.get("/getAlldetails", (req, res) => {
    console.log("Inside Cart", req.body);
    const sql = "SELECT * FROM details"
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

router.post("/New_info", (req, res) => {
    console.log("Inside details", req.body);
    const { NewName, description, price, Category, file, userId } = req.body
    const sql = `INSERT INTO details(name,description,price,Category,file,userId) 
    VALUES('${NewName}','${description}','${price}','${Category}','${file}','${userId}')`

    db.query(sql, (err, dbresult) => {
        if (err) throw err

        res.status(200).send("Success")
    })
})

router.get("/getSelectedDetails/:detailsid", (req, res) => {
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


router.get("/getAnimal/:category", (req, res) => {
    const sql = `SELECT * FROM details WHERE category = 'Animal'`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })

})

router.get("/getEducation/:category", (req, res) => {
    const sql = `SELECT * FROM details WHERE category = 'Education'`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })

})

router.get("/getmedical/:category", (req, res) => {
    const sql = `SELECT * FROM details WHERE category = 'Medical'`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })

})

router.get("/getMemorial/:category", (req, res) => {
    const sql = `SELECT * FROM details WHERE category = 'Memorial'`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })

})

router.get("/getWedding/:category", (req, res) => {
    const sql = `SELECT * FROM details WHERE category = 'Wedding'`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })

})


// router.put("/orderList", (req, res) => {
//     console.log("Inside Cart", req.body);
//     const { name, price, qty } = req.body
//     const sql = `INSERT INTO order_list(food_name,price,total_items) 
//     VALUES('${name}','${price}','${qty}')`
//     db.query(sql, (err, dbresult) => {
//         if (err) throw err

//         res.status(200).send(dbresult)
//     })
// })



router.get("/getSelectedFood/:detailsid", (req, res) => {
    const sql = `SELECT * FROM details WHERE detailsid='${req.params.detailsid}'`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })
})


// router.delete("/deleteFood/:foodid", (req, res) => {
//     const sql = `DELETE FROM add_to_cart WHERE foodid = '${req.params.foodid}'`
//     db.query(sql, (err, result) => {
//         const sql1 = " SELECT * from add_to_cart"
//         db.query(sql1, (err, result1) => {
//             res.status(200).send(result1)
//         })
//     })
// })


// router.post("/address", (req, res) => {
//     console.log("User Address", req.body)
//     const { fullname, PhoneNumber, place, pincode, address, landmark } = req.body

//     const sql = `INSERT INTO address(fullname,Phone_number,place,pincode,address,landmark) 
//                              VALUES('${fullname}','${PhoneNumber}','${place}','${pincode}','${address}','${landmark}')`

//     db.query(sql, (err, dbresult) => {
//         if (err) throw err

//         res.status(200).send(dbresult)
//     })

// })

// amount, mode: obj.mode, userId, PhoneNumber, fullname

router.post("/payment",(req, res)=>{
    const {amount,userId,mode,PhoneNumber,fullname} = req.body
    const sql = `INSERT INTO donate(amount,userId,mode,PhoneNumber,fullname) VALUES('${amount}','${userId}','${mode}','${PhoneNumber}','${fullname}')`
    db.query(sql, (err, result) => {
        console.log(req.body)
        if (err) throw err
        res.status(200).send(result)
    })
})


router.get("/getMyDetails/:userId", (req, res) => {
    const sql = `SELECT * FROM details WHERE userId='${req.params.userId}'`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })
})


router.get("/getPaymentDetails", (req, res) => {
    console.log("Inside Cart", req.body);
    const sql = "SELECT * FROM donate"
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })
})

router.get("/getPaymentDetails/:userId", (req, res) => {
    console.log("Inside Cart", req.body);
    const sql = `SELECT * FROM donate WHERE userId='${req.params.userId}'`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })
})


module.exports = router

