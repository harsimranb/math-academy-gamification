const express = require('express');
const router = express.Router();
const userRepo = require('../data/repositories/user.repository');

/* GET users listing. */
router.get('/:id', function(req, res) {
  userRepo.getUserByUsername(req.params.id, true, function (err, user) {

    if (err) {
      console.error(err);
      res.statusCode = 500;
      return res.json({ errors: ['An unexpected error occurred.'] });
    }

    res.json(user);
  })
});

module.exports = router;
