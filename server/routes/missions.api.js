const express = require('express');
const router = express.Router();
const missionsRepo = require('../data/repositories/missions.repository');

/* GET users listing. */
router.get('/', function(req, res) {
  missionsRepo.getAllMissions(function (err, missions) {

    if (err) {
      console.error(err);
      res.statusCode = 500;
      return res.json({ errors: ['An unexpected error occurred.'] });
    }

    res.json(missions);
  })
});

module.exports = router;
