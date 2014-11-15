'use strict';

var express = require('express');
var router = express.Router();

var fs = require('fs');

/* POST payment request. */
router.post('/:id', function(req, res) {
  var paymentRequest = {
    id: req.params.id,
    message: req.body.paymentRequest.message || '',
    amount: req.body.paymentRequest.amount,
    toWho: req.body.paymentRequest.toWho || '',
    fromWho: req.body.paymentRequest.fromWho
  };
  var store = {
    id: paymentRequest
  };

  fs.writeFile('../../database/paymentRequest.json', JSON.stringify(store), function (err) {
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
  fs.readFile('../../database/paymentRequest.json', function (err, data) {
    if (err) {
      console.log('wtf:err', err);
      throw err;
    }

    var data = JSON.parse(data);
    var paymentRequest = data[id];

    console.log('\n\npayment request retrieved:', paymentRequest, '\n\n');
    res.send({ status: 'success', data: paymentRequest });
  });

});

module.exports = router;


