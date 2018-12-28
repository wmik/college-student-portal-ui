import React, { Fragment } from 'react';
import { Card } from 'semantic-ui-react';

function Dashboard() {
  return (
    <Fragment>
      <Card.Group itemsPerRow={3} stackable>
        <Card href="#" header="Financials" description="0" meta="see more" />
        <Card
          href="#"
          header="Exam Status"
          description="ALLOWED"
          meta="see why"
        />
        <Card href="#" header="Something else" />
      </Card.Group>
    </Fragment>
  );
}

export default Dashboard;
