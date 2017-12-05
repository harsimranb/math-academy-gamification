import Alt from '../alt';
import axios from 'axios';

class MissionsActions {

  fetchAllMissions() {

    const _this = this;

    // Perhaps, abstract this further out into its own class of functions
    // Since the responsibility and dependency of axios(ajax) does not fall
    // in this class.  Would also make code more testable.
    return (dispatch) => {

      // Dispatch for loading state
      dispatch();

      // Make ajax call
      axios.get(`/api/missions/`)
        .then(function (response) {
          _this.updateMissions(response.data);
        })
        .catch(function (error) {
          console.log(error); // TODO Gracefully handle error
        });

    };
  }

  updateMissions(missions) {
    return missions;
  }

}

export default Alt.createActions(MissionsActions);
