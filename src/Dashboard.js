import React, { Fragment } from 'react';
import { Card, Header } from 'semantic-ui-react';
import AcademicTable from './AcademicTable';

function Dashboard() {
  return (
    <Fragment>
      <Header as="h3" style={{ marginBottom: '2rem' }}>
        Quick links
      </Header>
      <Card.Group itemsPerRow={3} stackable>
        <Card
          href="/financials/fee-statement"
          header="Financials"
          description="0"
          meta="see more"
        />
        <Card
          href="#"
          header="Exam Status"
          description="ALLOWED"
          meta="see why"
        />
        <Card href="#" header="Something else" />
      </Card.Group>
      <Header as="h3" style={{ marginBottom: '2rem', marginTop: '2.4rem' }}>
        Latest academic performance
      </Header>
      <AcademicTable />
    </Fragment>
  );
}

export default Dashboard;
