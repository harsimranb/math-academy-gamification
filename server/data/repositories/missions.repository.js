const MissionsModel = require('../models/missions');

/*
  Get all missions
    callbackFun: (err, missions) called with missions information or error.
*/
function getAllMissions(callbackFunc = null) {

  console.log("getAllMissions()");

  MissionsModel.find(function(err, missions) {
    if (callbackFunc) {
      callbackFunc(err, missions);
    }
  });

}

module.exports = {
  getAllMissions,
};
