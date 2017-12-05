import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import MissionItem from '../../components/missionItem';
import UserStore from '../../stores/user.store';
import MissionsStore from '../../stores/missions.store';

export default class DashboardPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      userStoreState: UserStore.getState(),
      missionsStoreState: MissionsStore.getState(),
    };

  }

  componentDidMount() {
    // Subscribe to user store on mount
    UserStore.listen(this.onUserStoreChange);
    MissionsStore.listen(this.onMissionsStoreChange);

    // Move this out of here to somewhere in the middleware
    if (!this.state.userStoreState.isUserLoaded) {
      this.props.history.push('/login');
    }
  }

  componentWillUnmount() {
    // Unsibscribe from user store
    UserStore.unlisten(this.onUserStoreChange);
    MissionsStore.unlisten(this.onMissionsStoreChange);
  }

  onUserStoreChange = (state) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        userStoreState: state,
      };
    });
  }

  onMissionsStoreChange = (state) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        missionsStoreState: state,
      };
    });
  }

  render() {

    return (
      <Segment loading={this.state.missionsStoreState.isLoading} raised>
        <Header as='h2'>Missions</Header>
        {
          this.state.missionsStoreState.missions &&
          this.state.missionsStoreState.missions.map((item, index) => {
            return (
              <MissionItem
                key={index}
                title={item.name}
                description={item.description}
                points={10}
                isCompleted={false}
              />
            );
          })
        }
      </Segment>
    );
  }

}
