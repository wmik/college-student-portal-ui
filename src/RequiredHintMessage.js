import React from 'react';
import { Message } from 'semantic-ui-react';
import HintMessage from './HintMessage';

function RequiredHintMessage({ children }) {
  return (
    <HintMessage>
      <Message.Item>
        All fields marked using a RED STAR
        <span style={{ color: 'crimson', fontSize: '1rem' }}>*</span> are
        required and CANNOT be left blank!
      </Message.Item>
      {children}
    </HintMessage>
  );
}

export default RequiredHintMessage;
