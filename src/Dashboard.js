import React, { Fragment } from 'react';
import { Card, Header, Statistic } from 'semantic-ui-react';
import AcademicTable from './AcademicTable';

function Dashboard() {
  return (
    <Fragment>
      <Header as="h3" style={{ marginBottom: '2rem' }}>
        Quick links
      </Header>
      <Card.Group itemsPerRow={3} stackable>
        <Card href="/financials/fee-statement">
          <Card.Content textAlign="center">
            <Card.Header>Financials</Card.Header>
            <Statistic color="green" size="small">
              <Statistic.Value>0</Statistic.Value>
            </Statistic>
          </Card.Content>
        </Card>
        <Card href="#">
          <Card.Content textAlign="center">
            <Card.Header>Exam status</Card.Header>
            <Statistic size="tiny" color="green">
              <Statistic.Value>ALLOWED</Statistic.Value>
            </Statistic>
          </Card.Content>
        </Card>
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
