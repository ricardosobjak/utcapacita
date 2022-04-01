var express = require('express');
var router = express.Router();

const Person = require('../database/models');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    let person = await Person.create(req.body);''
    return res.status(201).json(person);
  } catch (err) {
    return res.status(400).send(err);
  }
});

module.exports = router;
