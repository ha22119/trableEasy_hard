var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  
  if (req.body.email && req.body.pw) {
    console.log('req.body: ', req.body);
    

    model.selectUser(req.body.email, (results) => {

      //res.send(results[0]);
      console.log('results: ', results);
      //console.log(req.body.email, results[0].email, req.body.pw, results[0].pw)
      if (req.body.email === results[0].email && req.body.pw === results[0].pw) {
        // 로그인 성공 req.session에 기록
        req.session.isLogin = true;

        if (req.body.email.charAt(0) == 's') {
          req.session.student = true;
          req.session.userName = results[0].name + " 학생";
          req.session.number=results[0].st_id;
        } else {
          req.session.teacher = true;
          req.session.userName = results[0].name + " 선생님";
          
        }

        res.redirect('/');
      } else {
        res.send('<script>alert("아이디 및 비밀번호가 옳지 않습니다"); window.location="/";</script>');

      }
    });
  } else {
    res.redirect('/');
  }  
});

router.get('/logout', (req, res) => {
  req.session.destroy(function (err) {
    if (err)
      console.log(`req.session.destroy error : ${err}`);
    res.redirect('/');
  });
})


//회원가입 처리
router.post('/signup', (req, res) => {
  if (req.body.email && req.body.pw && req.body.pwcheck && req.body.phone && req.body.pw === req.body.pscheck) {

    console.log('req.body: ', req.body);

    model.signUpUser(req.body.email, req.body.pw, req.body.phone, (results) => {

      console.log(req.body.email, req.body.pw, req.body.phone)

    });
    res.redirect('/');

  } else {
    res.redirect('/');
  }
})


module.exports = router;
