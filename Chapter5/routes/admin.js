const express = require('express');

const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    res.send('<form method="POST" action="/products"><input type="text" name="title" /><button type="submit">Submit</button></form>');
});

router.post('/products',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;