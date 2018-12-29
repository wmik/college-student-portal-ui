import React, { Fragment } from 'react';
import AcademicTable from './AcademicTable';
import { Header } from 'semantic-ui-react';

function ProvisionalResultsTable() {
  return (
    <Fragment>
      <Header as="h3">Provisional results</Header>
      <AcademicTable />
    </Fragment>
  );
}

export default ProvisionalResultsTable;
