const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log('First call');
    next();
});

app.use((req,res,next)=>{
   console.log('Assignment Solved');
   res.send('Assignment Solved');
});

app.use('/users',(req,res,next)=>{
  res.send('<h2>All Users List</h2>');
});

app.use('/',(req,res,next)=>{
  console.log("In another middleware");
  res.send('<h2>Hello from Express</h2>');
})