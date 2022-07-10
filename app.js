const express = require('express');
const app = express();

app.use('/users',(req,res,next)=>{
  res.send('<h2>All Users List</h2>');
});


app.use('/add-product',(req,res,next)=>{
  console.log("In the middleware");
  res.send('<h2>Add Product here</h2>');
})

app.use('/',(req,res,next)=>{
  console.log("In another middleware");
  res.send('<h2>Hello from Express</h2>');
})


app.listen(3000);
