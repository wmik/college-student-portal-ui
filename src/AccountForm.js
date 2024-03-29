import React from 'react';
import { Grid, Form, Header } from 'semantic-ui-react';
import RequiredHintMessage from './RequiredHintMessage';

function AccountForm() {
  return (
    <Form>
      <Grid.Row>
        <Header as="h3">Change password</Header>
        <RequiredHintMessage />
        <Form.Group widths="equal">
          <Form.Input fluid label="Old password" required />
          <Form.Input fluid label="New password" required />
          <Form.Input fluid label="Confirm password" required />
        </Form.Group>
      </Grid.Row>
      <Grid.Row>
        <Form.Group>
          <Form.Button color="green">Update password</Form.Button>
          <Form.Field style={{ padding: '0.5rem' }}>
            <a href="#/">Forgot password</a>
          </Form.Field>
        </Form.Group>
      </Grid.Row>
    </Form>
  );
}

export default AccountForm;
