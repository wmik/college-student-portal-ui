import React, { Fragment } from 'react';
import AcademicTable from './AcademicTable';
import { Header } from 'semantic-ui-react';
import ColumnSortHintMessage from './ColumnSortHintMessage.js';

function ProvisionalResultsTable() {
  return (
    <Fragment>
      <Header as="h3">Provisional results</Header>
      <ColumnSortHintMessage />
      <AcademicTable />
    </Fragment>
  );
}

export default ProvisionalResultsTable;
