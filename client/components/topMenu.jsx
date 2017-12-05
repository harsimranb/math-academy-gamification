import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Header, Container } from 'semantic-ui-react';

/*
  Returns the Top Menu with User information and points.
  Props:
    userInfo {userName, pointsEarned}
*/

const topNav = props => (
  <div>
    <Menu>
      <Container>

        {/* Print Header */}
        <Menu.Item position="left" header>
          Math Academy
        </Menu.Item>

        {/* Print User Info */}
        {
          props.userInfo &&
          <Menu.Item position="right">
            <Header as='h3'>
              <Icon name='user circle outline' />
              <Header.Content>
                {props.userInfo.userName}
                <Header.Subheader>
                  Points: {props.userInfo.pointsEarned}
                </Header.Subheader>
              </Header.Content>
            </Header>
          </Menu.Item>
        }

      </Container>
    </Menu>
  </div>
);

topNav.propTypes = {
  userInfo: PropTypes.object,
};

export default topNav;
