import React, { Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import { Router } from '@reach/router';

import FloatingSideMenu from './FloatingSideMenu';
import ProfileForm from './ProfileForm';
import BreadcrumbNav from './BreadcrumbNav';
import AccountForm from './AccountForm';
import Dashboard from './Dashboard';
import RegisterUnitsTable from './RegisterUnitsTable';
import ProvisionalResultsTable from './ProvisionalResultsTable';
import FeeStatementTable from './FeeStatementTable';
import Notifications from './Notifications';

function App() {
  return (
    <Fragment>
      <Grid padded stackable>
        <Grid.Row>
          <Grid.Column style={{ marginLeft: '3rem' }}>
            <BreadcrumbNav />
          </Grid.Column>
        </Grid.Row>
        <Grid.Column width={4}>
          <FloatingSideMenu />
        </Grid.Column>
        <Grid.Column width={10}>
          <Router>
            <Dashboard path="home/dashboard" />
            <Notifications path="home/notifications" />
            <FeeStatementTable path="financials/fee-statement" />
            <RegisterUnitsTable path="academics/register-units" />
            <ProvisionalResultsTable path="academics/provisional-results" />
            <ProfileForm path="settings/profile" />
            <AccountForm path="settings/account" />
          </Router>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
}

export default App;
