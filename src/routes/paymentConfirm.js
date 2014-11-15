'use strict';

var express = require('express');
var router = express.Router();

var fs = require('fs');

/* POST payment request. */
router.get('/payment-request/:id', function(req, res) {
  fs.readFile('../../database/paymentRequest.json', function (err, data) {
    if (err) {
      console.log('wtf:err', err);
      throw err;
    }

    var data = JSON.parse(data);
    data[id]
    console.log('It\'s saved!');
    res.send({ status: 'success' });
  });

});

module.exports = router;
