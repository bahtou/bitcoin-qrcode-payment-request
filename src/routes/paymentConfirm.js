'use strict';

var express = require('express');
var router = express.Router();

var fs = require('fs');

/* POST payment confirmation. */
router.post('/payment-confirm/:id', function(req, res) {
  var paymentConfirm = {
    id: req.params.id,
    message: req.body.paymentRequest.message || '',
    amount: req.body.paymentRequest.amount,
    toWho: req.body.paymentRequest.toWho || '',
    fromWho: req.body.paymentRequest.fromWho
  };
  var store = {
    id: paymentConfirm
  };

  fs.writeFile('../../database/paymentConfirm.json', JSON.stringify(store), function (err) {
    if (err) {
      console.log('wtf:err', err);
      throw err;
    }

    console.log('payment confirm saved!');
    res.send({ status: 'success' });
  });

});

module.exports = router;
