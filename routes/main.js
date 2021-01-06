var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/info', function(req, res, next) {
  res.render('information', { title: 'Express' });
});

router.get('/jeunra', function(req, res, next) {
  res.render('main', { title: 'Express' });
});


module.exports = router;