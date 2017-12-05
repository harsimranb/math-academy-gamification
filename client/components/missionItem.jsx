import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Item } from 'semantic-ui-react';

const missionItem = (props) => {
  return (
    <Item className='mission-item'>
      <Item.Content>
        <Item.Header as='h3' className="">{props.title}</Item.Header>
        <Item.Meta>
          <span>{props.description}</span>
        </Item.Meta>
      </Item.Content>
    </Item>
  );
};

missionItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

export default missionItem;
