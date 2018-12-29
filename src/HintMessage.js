import React from 'react';
import { Message, Icon } from 'semantic-ui-react';

function HintMessage({ children }) {
  return (
    <Message info size="tiny">
      <Message.Header>
        Hint <Icon name="info circle" size="small" />
      </Message.Header>
      <Message.List>{children}</Message.List>
    </Message>
  );
}

export default HintMessage;
