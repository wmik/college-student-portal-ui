import React, { Fragment } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  Container,
  Breadcrumb,
  Button,
  Grid,
  Form,
  Image,
  Header,
  Input,
  Menu
} from 'semantic-ui-react';

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'x', text: 'Other', value: 'other' }
];

const nationalityOptions = [
  { key: 'ke', text: 'Kenyan', value: 'kenyan' },
  { key: 'usa', text: 'American', value: 'american' },
  { key: 'x', text: 'Other', value: 'other' }
];

const countryOptions = [
  { key: 'ke', text: 'Kenya', value: 'kenyan' },
  { key: 'usa', text: 'USA', value: 'usa' },
  { key: 'x', text: 'Other', value: 'other' }
];

const cityOptions = [
  { key: 'nrb', text: 'Nairobi', value: 'nairobi' },
  { key: 'x', text: 'Other', value: 'other' }
];

const countyStateOptions = [
  { key: 'nrb', text: 'Nairobi', value: 'nairobi' },
  { key: 'al', text: 'Alabama', value: 'alabama' },
  { key: 'x', text: 'Other', value: 'other' }
];

function App() {
  return (
    <Fragment>
      <Grid padded stackable>
        <Grid.Row>
          <Grid.Column>
            <Breadcrumb size="big">
              <Breadcrumb.Section>Settings</Breadcrumb.Section>
              <Breadcrumb.Divider icon="right chevron" />
              <Breadcrumb.Section link>Profile</Breadcrumb.Section>
            </Breadcrumb>
          </Grid.Column>
        </Grid.Row>
        <Grid.Column width={4}>
          <Menu vertical style={{ margin: '0 auto' }}>
            <Menu.Item>
              <Menu.Header>Home</Menu.Header>
              <Menu.Menu>
                <Menu.Item name="Dashboard" link />
                <Menu.Item name="Notifications" link />
              </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
              <Menu.Header>Financials</Menu.Header>
              <Menu.Menu>
                <Menu.Item name="Fees statement" link />
                <Menu.Item name="Payment information" link />
              </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
              <Menu.Header>Academics</Menu.Header>
              <Menu.Menu>
                <Menu.Item name="Provisional results" link />
                <Menu.Item name="Register units" link />
                <Menu.Item name="Exam status" link />
              </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
              <Menu.Header>Settings</Menu.Header>
              <Menu.Menu>
                <Menu.Item name="Profile" link />
                <Menu.Item name="Account" link />
                <Menu.Item name="Log out" link />
              </Menu.Menu>
            </Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column width={10}>
          <Form>
            <Grid.Row>
              <Header as="h4">Profile picture</Header>
              <Container style={{ display: 'flex', alignItems: 'flex-start' }}>
                <Image src="/images/square-image.png" circular size="small" />
                <Button
                  color="green"
                  style={{ alignSelf: 'center', margin: '0 2rem' }}
                >
                  Upload new picture
                </Button>
              </Container>
              <Header as="h3">Personal information</Header>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="First name"
                  placeholder="First name"
                  required
                />
                <Form.Input
                  fluid
                  label="Middle name"
                  placeholder="Middle name"
                />
                <Form.Input
                  fluid
                  label="Last name"
                  placeholder="Last name"
                  required
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Birth date"
                  placeholder="DD/MM/YYYY"
                  required
                />
                <Form.Select
                  fluid
                  label="Gender"
                  placeholder="Gender"
                  options={genderOptions}
                />
                <Form.Select
                  fluid
                  label="Nationality"
                  placeholder="Nationality"
                  options={nationalityOptions}
                  required
                />
              </Form.Group>
              <Form.Group widths={3}>
                <Form.Input
                  fluid
                  label="ID/Passport number"
                  placeholder="ID/Passport number"
                  required
                />
              </Form.Group>
            </Grid.Row>
            <br />
            <Grid.Row>
              <Header as="h3">Contact information</Header>
              <Form.Group widths="equal">
                <Form.Field required>
                  <label>Phone number</label>
                  <Input label="+254" placeholder="7xxxxxxxx" />
                </Form.Field>
                <Form.Input label="Email" placeholder="Email" />
              </Form.Group>
            </Grid.Row>
            <br />
            <Grid.Row>
              <Header as="h3">Address</Header>
              <Form.Group widths="equal">
                <Form.Select
                  fluid
                  label="Country"
                  placeholder="Country"
                  options={countryOptions}
                />
                <Form.Select
                  fluid
                  label="City"
                  placeholder="City"
                  options={cityOptions}
                />
                <Form.Select
                  fluid
                  label="County/State"
                  placeholder="County/State"
                  options={countyStateOptions}
                />
              </Form.Group>
              <Form.Group widths={3}>
                <Form.Input label="Postal code" placeholder="Postal code" />
                <Form.Input label="Zip" placeholder="Zip" />
              </Form.Group>
            </Grid.Row>
            <br />
            <br />
            <Grid.Row>
              <Form.Group>
                <Form.Button>Cancel</Form.Button>
                <Form.Button primary>Save changes</Form.Button>
              </Form.Group>
            </Grid.Row>
          </Form>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
}

export default App;
