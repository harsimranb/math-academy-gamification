import React from 'react';
import { Message, Form, Segment } from 'semantic-ui-react';
import UserActions from '../../actions/user.actions';
import UserStore from '../../stores/user.store';
import MissionsActions from '../../actions/missions.actions';

export default class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      userStoreState: UserStore.getState(),
    };

  }

  componentDidMount() {
    // Subscribe to user store on mount
    UserStore.listen(this.onUserStoreChange);

    // Definitely move this out of here in the future
    MissionsActions.fetchAllMissions();
  }

  componentWillUnmount() {
    // Unsibscribe from user store
    UserStore.unlisten(this.onUserStoreChange);
  }

  onChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  onUserStoreChange = (state) => {
    // When store changes, update state
    if (state.isUserLoaded) {
      this.props.history.push('/dashboard');
    }

    this.setState((prevState) => {
      return {
        ...prevState,
        userStoreState: state,
      };
    });
  }

  onSubmit = () => {
    UserActions.fetchUser(this.state.username);
    return false;
  }

  render() {
    const { username, userStoreState } = this.state;
    return (
      <Segment loading={userStoreState.isLoading}>
        <Message
          header='Welcome to Math Academy!'
          content={`Enter your information below. If you don't have an account, it will automatically be created for you.`}
        />
        <Form onSubmit={this.onSubmit}>
          <Form.Input name='username' label='Username' placeholder='Username' content={username} onChange={this.onChange} required />
          <Form.Button content='Login' />
        </Form>
      </Segment>
    );
  }

}
