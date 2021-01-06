var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { jjim:req.session.jjim});
  req.session.jjim=true;
});

router.get('/main', function(req, res, next) {
  res.render('main', {jjim:req.session.jjim});
  req.session.jjim=true;
});

module.exports = router;
