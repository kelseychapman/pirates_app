const express = require('express');
const router = express.Router();
const knex = require('../db/knex')

router.get('/', function(req, res) {
  knex('pirates').then(function(pirates) {
      // console.log('hey');
    res.send(pirates);
  }).catch(function(err) {
    res.send(err);
  });
});


module.exports = router;
