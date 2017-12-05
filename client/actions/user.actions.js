import Alt from '../alt';
import axios from 'axios';

class UserActions {

  fetchUser(username) {

    const _this = this;

    // Perhaps, abstract this further out into its own class of functions
    // Since the responsibility and dependency of axios(ajax) does not fall
    // in this class.  Would also make code more testable.
    return (dispatch) => {

      // Dispatch for loading state
      dispatch();

      // Make ajax call
      axios.get(`/api/users/${username}`)
        .then(function (response) {
          _this.updateUser(response.data);
        })
        .catch(function (error) {
          console.log(error); // TODO Gracefully handle error
        });

    };
  }

  updateUser(user) {
    return user;
  }

}

export default Alt.createActions(UserActions);
