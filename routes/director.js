var express = require('express');
var router = express.Router();

const Director = require('../models/Director.js');

router.post('/', function (req, res, next) {
  const director = new Director(req.body);

  const promise = director.save();
  promise.then((data) => {
    res.json({ status: 1 });
  }).catch((err) => {
    res.json(err);
  });
});


module.exports = router;
