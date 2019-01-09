import React from 'react';
import { Message } from 'semantic-ui-react';
import HintMessage from './HintMessage';

function ColumnSortHintMessage({ children }) {
  return (
    <HintMessage>
      <Message.Item>
        Click on any column title to use it to sort the table
      </Message.Item>
      {children}
    </HintMessage>
  );
}

export default ColumnSortHintMessage;
