const express = require("express");
const app = express();
require('dotenv').config();
const connectDB = require('./config/connectDB');
connectDB();
const product = require('./routes/product')
const User = require('./routes/userRoute')

app.use(express.json());
app.use('/api/product', product)
app.use('/api/auth', User );

const PORT = process.env.PORT || 4040;

app.listen(PORT,(err)=>{
    err? console.log(err) : console.log(`server is listening on ${PORT}`)
})


