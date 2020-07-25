const express = require('express');
const router = express.Router();
const Product = require('../model/product');

router.get('', (req, res) => {
  Product.find({}, (err, foundProducts) => {
    return res.json(foundProducts);
  });
  //res.json({ 'ok': true });
});

router.get('/:productId', (req, res) => {
  const productId = req.params.productId;
  //console.log(req.params.productId);
  Product.findById(productId, (err, foundProduct) => {
    if (err) {
      return res.status(422).send({
        errors: [
          {
            title: 'Product error',
            detail: 'Product not found'
          }
        ]
      })
    }
    return res.json(foundProduct);
  });
  //res.json({ 'ok': true });
});


module.exports = router;
