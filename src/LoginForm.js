import React from 'react';
import { Form, Header, Grid, Segment } from 'semantic-ui-react';
import { Link } from '@reach/router';

const LoginForm = () => {
  return (
    <Grid padded stackable centered>
      <Grid.Row centered style={{ marginTop: '8rem' }}>
        <Grid.Column width={6}>
          <Segment padded piled>
            <Header as="h3" color="blue">
              Sign in to access your account
            </Header>
            <Form>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Login ID"
                required
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                required
              />
              <Form.Checkbox label="Remember me" />
              <Link
                to="app/home/dashboard"
                style={{
                  width: '100%'
                }}
              >
                <Form.Button type="submit" fluid>
                  Login
                </Form.Button>
              </Link>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default LoginForm;
