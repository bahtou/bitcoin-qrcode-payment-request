var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log('\n\nhere\n\n');
  res.sendFile('index.html');
});

module.exports = router;
