import React from 'react';
import { Container } from 'semantic-ui-react';
import TopMenu from './components/topMenu';
import MainRoutes from './pages';
import UserStore from './stores/user.store';

/*
  This is the default layout (template) used by all the oages.
  It sets up the common structure of the page.

  In redesign, we would further abstract away user specific information.
*/

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = UserStore.getState();
  }

  componentDidMount() {
    // Subscribe to user store on mount
    UserStore.listen(this.onUserStoreChange);
  }

  componentWillUnmount() {
    // Unsibscribe from user store
    UserStore.unlisten(this.onUserStoreChange);
  }

  onUserStoreChange = (state) => {
    // When store changes, update state
    this.setState(state);
  }

  render() {
    return (
      <div>
        <TopMenu
          userInfo={this.state.currentUser}
        />
        <Container text style={{ marginTop: '7em' }}>
          <MainRoutes />
        </Container>
      </div>
    );
  }
}
