var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('index', {jjim:req.session.jjim});
  req.session.jjim=true;
});

router.post('/info', function(req, res, next) {
  res.render('information', {
    jjim:req.session.jjim
  });
  req.session.jjim=false;
});



router.get('/jeunra', function(req, res, next) {
  res.render('main', { title: 'Express' });
});

router.get('/my1', function(req, res, next) {
  res.render('mysinchung', { title: 'Express' });
});

router.get('/my2', function(req, res, next) {
  res.render('mytravel', { title: 'Express' });
});

router.get('/my3', function(req, res, next) {
  res.render('myjjim', { title: 'Express' });
});

router.get('/writeReview', function(req, res, next) {
  res.render('writeReview', { title: 'Express' });
});

router.get('/noguide', function(req, res, next) {
  res.render('guide', { title: 'Express' });
});

router.get('/noguide/enroll', function(req, res, next) {
  res.render('enroll', { title: 'Express' });
});

router.get('/noguide/travel', function(req, res, next) {
  res.render('writeCourse', { title: 'Express' });
});

router.get('/enroller', function(req, res, next) {
  res.render('guide2', { title: 'Express' });
});


module.exports = router;