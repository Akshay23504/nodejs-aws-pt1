var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    con.query("SELECT * FROM user LIMIT 5", function(err, result) {
      if (err) throw err;
      res.render('index', { title: 'Sample Node JS app in AWS', data: result});
    });
});

module.exports = router;
