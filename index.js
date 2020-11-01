const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../config/auth')
//Dashboard model
const Dash = require('../models/Dashboard');

const { Router } = require('express');


//Welcome page
router.get('/' , (req,res) => res.render('welcome'));
//Dashboard
router.get('/dashboard' , ensureAuthenticated,(req,res) => 
res.render('dashboard',{
    name : req.user.name
}));

// //Dashboard handle
router.post('/precp' ,(req,res,next) => { 
    var item = {
        rollno : req.body.rollno,
        name : req.body.name,
        age : req.body.age,
        symptoms : req.body.symptoms,
        psr : req.body.psr
    };
    var data = new Dash(item);
    //Saving data
    data.save();
    
    res.render('precp',{
        rollno : req.body.rollno,
        name : req.body.name,
        age : req.body.age,
        symptoms : req.body.symptoms,
        psr : req.body.psr
    });
});

//Dashboard to Emergency
router.post('/emergency' ,(req,res,next) => { 
    var item = {
        rollno : req.body.rollno,
        name : req.body.name,
        age : req.body.age,
        symptoms : req.body.symptoms,
        psr : req.body.psr
    };
    var data = new Dash(item);
    //Saving data
    data.save();
    
    res.render('emergency',{
        rollno : req.body.rollno,
        name : req.body.name,
        age : req.body.age,
        symptoms : req.body.symptoms,
        psr : req.body.psr
    });
});




module.exports = router;