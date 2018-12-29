import React, { Fragment } from 'react';
import AcademicTable from './AcademicTable';
import { Header, Message } from 'semantic-ui-react';
import HintMessage from './HintMessage';

function ProvisionalResultsTable() {
  return (
    <Fragment>
      <Header as="h3">Provisional results</Header>
      <HintMessage>
        <Message.Item>
          Select a table header to sort the table using the selected key
        </Message.Item>
      </HintMessage>
      <AcademicTable />
    </Fragment>
  );
}

export default ProvisionalResultsTable;
