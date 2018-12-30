import React, { Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import { Router, Location } from '@reach/router';

import FloatingSideMenu from './FloatingSideMenu';
import ProfileForm from './ProfileForm';
import BreadcrumbNav from './BreadcrumbNav';
import AccountForm from './AccountForm';
import Dashboard from './Dashboard';
import RegisterUnitsTable from './RegisterUnitsTable';
import ProvisionalResultsTable from './ProvisionalResultsTable';
import FeeStatementTable from './FeeStatementTable';
import Notifications from './Notifications';
import PaymentInformation from './PaymentInformation';
import MobileMenu from './MobileMenu';
import Resize from './Resize';

function App() {
  return (
    <Fragment>
      <Grid padded stackable>
        <Grid.Row>
          <Grid.Column style={{ marginLeft: '3rem' }}>
            <Location>
              {({ location }) => {
                function capitalize(word) {
                  return word[0].toUpperCase() + word.slice(1);
                }
                if (location.pathname !== '/') {
                  const [section, page] = location.pathname
                    .slice(1)
                    .split('/')
                    .map(capitalize);
                  return <BreadcrumbNav section={section} page={page} />;
                }
              }}
            </Location>
          </Grid.Column>
        </Grid.Row>
        <Grid.Column width={4}>
          <Resize>
            {state => (state.isMobile ? <MobileMenu /> : <FloatingSideMenu />)}
          </Resize>
        </Grid.Column>
        <Grid.Column width={10}>
          <Router>
            <Dashboard path="home/dashboard" />
            <Notifications path="home/notifications" />
            <FeeStatementTable path="financials/fee-statement" />
            <PaymentInformation path="financials/payment-information" />
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
