const express = require('express');
const router = express.Router();


router.get('/shop',(req,res,next)=>{
    console.log('Shop is here');
    res.send(
        '<h2>Add a shop by filling the form below</h2>'
    );
});

router.post('/products',(req,res,next)=>{
    console.log("Products post shop page", req.body);
    res.redirect('/shop');
});



module.exports = router;