const UserModel = require('../models/user');

/*
  Get a user by the username
    userName: user name to look up
    callbackFun: (err, user) called with user information or error.
*/
function getUserByUsername (userName, createIfDoesNotExist = true, callbackFunc = null) {

  console.log("getUserByUsername(): username=" + userName);

  if (!userName) {
    return null;
  }

  UserModel.find({userName: userName}, function(err, users) {

    if (users.length === 0 && createIfDoesNotExist) {
      createUser(userName, callbackFunc);
    } else {
      if (callbackFunc) {
        callbackFunc(err, users[0]);
      }
    }
  });

}

/*
  Create user by username
    userName: user name to look up
    callbackFun: (err, user) called with user information or error.
*/
function createUser(userName, callbackFunc) {

  console.log("createUser(): username=" + userName);

  if (!userName) {
    throw new Error("username is required!");
  }

  // TODO check if username exists

  var model = new UserModel({
    userName: userName,
    pointsEarned: 0,
    createdDateTime: Date.now(),
    missions: [],
  });

  model.save(function(err, user) {
    if (callbackFunc) {
      callbackFunc(err, user);
    }
  });
}

module.exports = {
  getUserByUsername,
  createUser,
};
