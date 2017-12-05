import Alt from '../alt';
import UserActions from '../actions/user.actions';

class UserStore {

  constructor() {

    this.currentUser = null;
    this.isLoading = false;
    this.isUserLoaded = false;

    this.bindListeners({
      handleFetchUser: UserActions.FETCH_USER,
      handleUpdateUser: UserActions.UPDATE_USER
    });
  }

  handleFetchUser() {
    this.isLoading = true;
    this.isUserLoaded = false;
    this.currentUser = null;
  }

  handleUpdateUser(user) {
    this.isLoading = false;
    this.currentUser = user;
    this.isUserLoaded = true;
  }

}

export default Alt.createStore(UserStore, 'UserStore');
