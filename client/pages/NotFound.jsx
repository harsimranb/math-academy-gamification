import React from 'react';
import { Header, Icon } from 'semantic-ui-react'

export default () => () => (
  <Header as='h2'>
    <Icon name='warning circle' />
    <Header.Content>
      Page Not Found
      <Header.Subheader>
        Sorry, the page you were trying to access could not be found.
      </Header.Subheader>
    </Header.Content>
  </Header>
);
