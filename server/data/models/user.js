var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  userName: String,
  pointsEarned: Number,
  createdDateTime: Date,
  /*
    Potential Issues Below:
    1. If new missions/excercises added, this will be inconsistent.
    2. IsCompleted and point count will also break off.
    These are easier to solve in RDBS, but we can do better here too.
  */
  missions: [{
    missionId: Number,
    isCompleted: Boolean,
    excercises: [{
      optionId: Number,
      isCompleted: Boolean,
    }],
  }]
});

module.exports = mongoose.model('Users', userSchema);
