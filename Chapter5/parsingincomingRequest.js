const express = require('express');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoute);
app.use(shopRoute);

app.get('/',(req,res,next)=>{
  console.log("In another middleware");
  res.send('<h2>Hello from Express</h2>');
});

app.use((req,res,next)=>{
    res.status(404).send('<h1>Not Found </h1>');
})

app.listen(3000);

