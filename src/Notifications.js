import React from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';

function Notifications() {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="bell slash" />
        No new notifications.
      </Header>
    </Segment>
  );
}

export default Notifications;
