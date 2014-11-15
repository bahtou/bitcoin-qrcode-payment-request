'use strict';

var express = require('express');
var router = express.Router();

var fs = require('fs');

/* POST payment request. */
router.post('/payment-request/:id', function(req, res) {
  var paymentRequest = {
    id: req.params.id,
    message: req.body.paymentRequest.message || '',
    amount: req.body.paymentRequest.amount,
    toWho: req.body.paymentRequest.toWho || '',
    fromWho: req.body.paymentRequest.fromWho
  };

  fs.writeFile('../../database/paymentRequest.json', JSON.stringify([paymentRequest]), function (err) {
    if (err) {
      console.log('wtf:err', err);
      throw err;
    }

    console.log('It\'s saved!');
    res.send({ status: 'success' });
  });

});

module.exports = router;
