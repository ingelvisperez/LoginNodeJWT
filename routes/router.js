const express = require('express')
const router = express.Router()
const conexion = require('../database/db')

const authController = require('../controller/authController')

router.get('/',authController.isAuthenticated, async (req,res)=>{

    // conexion.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    //     if (error) {
    //         console.log(error) ;
    //     } else {
    //         console.log("este es resuls" + results)
    //         res.render('index', { results: results, user:req.user});
    //     }
    //     });
    const userLoged = req.user.id
    var pedro;
    conexion.query('SELECT * FROM users WHERE id = ?',[userLoged], (error, results) => {
        if (error) {
            console.log(error) ;
        } else {
            console.log("este es resuls" + results)
            // res.render('index', { results: results, user:req.user});
            pedro = results
        }
        });

    conexion.query('SELECT * FROM devices', (error, resultsDevice) => {
        if (error) {
            console.log(error) ;
        } else {
            console.log("este es resuls" + resultsDevice)
            res.render('index', { results: pedro, resultsDevice: resultsDevice, user:req.user});
        }
        });
})

router.get('/login',(req,res)=>{
    res.render('login', {alert:false})
})

router.get('/register',authController.isAuthenticated,(req,res)=>{
    res.render('register', {user:req.user})
})


//router para los metodos del controller
router.post('/register',authController.register)
router.post('/registerDevice',authController.registerDevice)
router.post('/login',authController.login )
router.get('/logout',authController.logout )
 
module.exports = router