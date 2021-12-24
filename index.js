const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const productRouters = require('./routes/product');

const app = express();

app.use(cors());
app.use(express.json()); // For req.body in json 

app.use('/api/product' , productRouters );

mongoose.connect('mongodb+srv://vraj:vraj1012@cluster0.w6bob.mongodb.net/product' , () => {   // mongodb+srv://vraj:vraj1012@cluster0.w6bob.mongodb.net/product
    app.listen(4000 , () => {
        console.log("Server runnnig on port 4000!");
    });
})