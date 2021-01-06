var connection = require('./db')



exports.selectUser = function (email, cb) {

    var first = email.charAt(0); //이메일 첫번째 문자가 's'이면 학생, 아니면 선생님

    if (first == 's') {
        connection.query('SELECT * FROM objectdb.student WHERE email = ?', [email], function (error, results, fields) {
            if (error) {
                console.log(error);
            } else {
                cb(results);
            }
        });
    }
    else {
        connection.query('SELECT * FROM objectdb.teacher WHERE email = ?', [email], function (error, results, fields) {
            if (error) {
                console.log(error);
            } else {
                cb(results);
            }
        });
    }
}


//회원가입
exports.signUpUser = function (email,pw,phone) {


    connection.query('SELECT * FROM travelEasy.user_phone WHERE user_phone = ?', [phone], function (error, results, fields) {
        if (error) {
            console.log('에러는3'+error);
        } else {
            connection.query('INSERT INTO users(user_phone,user_Id,user_PW) values(?,?,?,?)', [phone,email,pw], function (error, results, fields) {
                if (error) {
                    console.log('에러는1'+error);
                } else {
                    cb(results);
                    
                }
            });
        
        }
    });
}