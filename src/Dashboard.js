import React, { Fragment } from 'react';
import { Card, Header, Statistic } from 'semantic-ui-react';
import AcademicTable from './AcademicTable';
import ColumnSortHintMessage from './ColumnSortHintMessage.js';

function Dashboard() {
  return (
    <Fragment>
      <Header as="h3" style={{ marginBottom: '2rem' }}>
        Summary
      </Header>
      <Card.Group itemsPerRow={3} stackable>
        <Card href="/app/financials/fee-statement">
          <Card.Content textAlign="center">
            <Card.Header>Fee balance</Card.Header>
            <Statistic color="green" size="small">
              <Statistic.Value>0</Statistic.Value>
            </Statistic>
          </Card.Content>
        </Card>
        <Card href="/app/academics/register-units">
          <Card.Content textAlign="center">
            <Card.Header>Registered units</Card.Header>
            <Statistic size="small" color="blue">
              <Statistic.Value>7</Statistic.Value>
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
      </Card.Group>
      <Header as="h3">Latest academic performance</Header>
      <ColumnSortHintMessage />
      <AcademicTable />
    </Fragment>
  );
}

export default Dashboard;
