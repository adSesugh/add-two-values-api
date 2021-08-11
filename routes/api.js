var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Api Testing' });
});

router.post('/add', function(req, res, next) {
  const { num1, num2} = req.body;
  var sum = num1 + num2;
  res.status(200).json({sum});
})

module.exports = router;