import React, { Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import { Router } from '@reach/router';

import FloatingSideMenu from './FloatingSideMenu';
import ProfileForm from './ProfileForm';
import BreadcrumbNav from './BreadcrumbNav';

function App() {
  return (
    <Fragment>
      <Grid padded stackable>
        <Grid.Row>
          <Grid.Column>
            <BreadcrumbNav />
          </Grid.Column>
        </Grid.Row>
        <Grid.Column width={4}>
          <FloatingSideMenu />
        </Grid.Column>
        <Grid.Column width={10}>
          <Router>
            <ProfileForm path="settings/profile" />
          </Router>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
}

export default App;
