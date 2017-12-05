import Alt from '../alt';
import MissionsActions from '../actions/missions.actions';

class MissionsStore {

  constructor() {

    this.missions = null;
    this.isLoading = false;
    this.isMissionsLoaded = false;

    this.bindListeners({
      handleFetchAllMissions: MissionsActions.FETCH_ALL_MISSIONS,
      handleUpdateMissions: MissionsActions.UPDATE_MISSIONS,
    });
  }

  handleFetchAllMissions() {
    this.isLoading = true;
    this.isMissionsLoaded = false;
    this.missions = null;
  }

  handleUpdateMissions(missions) {
    this.isLoading = false;
    this.missions = missions;
    this.isMissionsLoaded = true;
  }

}

export default Alt.createStore(MissionsStore, 'MissionsStore');
