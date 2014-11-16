'use strict';

var express = require('express');
var router = express.Router();

var fs = require('fs');

/* POST payment request. */
router.post('/:id', function(req, res) {
  console.log('paymentRequest', req.body);
  console.log('params', req.params);
  var paymentRequest = [{
    id: req.params.id,
    message: req.body.message || '',
    amount: req.body.amount,
    toWho: req.body.toWhom|| '',
    fromWho: req.body.fromWhom
  }];

  fs.writeFile('paymentRequest.json', JSON.stringify(paymentRequest), function (err) {
    if (err) {
      console.log('wtf:err', err);
      throw err;
    }

    console.log('payment request saved!');
    res.send({ status: 'success' });
  });

});

/* GET payment request. */
router.get('/:id', function(req, res) {
  fs.readFile('paymentRequest.json', function (err, data) {
    if (err) {
      console.log('wtf:err', err);
      throw err;
    }

    var data = JSON.parse(data);
    var paymentRequest = data[0];

    console.log('\n\npayment request retrieved:', paymentRequest, '\n\n');
    res.send({ status: 'success', data: paymentRequest });
  });

});

module.exports = router;


