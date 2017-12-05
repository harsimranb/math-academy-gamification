var mongoose = require('mongoose');

var missionSchema = new mongoose.Schema({
  name: String,
  description: String,
  excercises: [{
    title: String,
    description: String,
    options: [{
      id: Number,
      text: String,
    }],
    correctOptionId: Number,
  }],
});

module.exports = mongoose.model('Missions', missionSchema);
