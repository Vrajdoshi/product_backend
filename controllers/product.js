const Product = require('../model/product');

module.exports.getProducts = (req,res,next) => {
    Product.find()
    .then( products => {
        res.json({products : products});
    })
    .catch( err => {
        console.log(err);
        res.json({error : "Internal server error"});
    })
};

module.exports.postProduct = (req,res,next) => {
    const title = req.body.title;
    const des = req.body.description;
    const price = req.body.price;
    const minQty = req.body.minQuntity;
    const maxQty = req.body.maxQuntity;
    const quntity = req.body.quntity;

    const product = new Product({
        title : title,
        description : des,
        price : price,
        minQuntity : minQty,
        maxQuntity : maxQty,
        quntity : quntity
    })

    product.save()
    .then( result => {
        res.json({success : "Product added Successfully"});
    })
    .catch( err => {
        console.log(err);
        res.json({error : "Internal server error"});
    });
};

module.exports.deleteProduct = (req , res , next) => {
    const prodId = req.body._id;

    Product.findByIdAndRemove(prodId)
    .then( result => {
        res.json({success : "Product deleted Successfully"});
    })
    .catch( err => {
        console.log(err);
        res.json({error : "Internal server error"});
    })
};