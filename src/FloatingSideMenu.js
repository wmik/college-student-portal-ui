import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '@reach/router';

function FloatingSideMenu() {
  return (
    <Menu vertical style={{ margin: '0 auto' }}>
      <Menu.Item>
        <Menu.Header>Home</Menu.Header>
        <Menu.Menu>
          <Menu.Item>
            <Link to="home/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="home/notifications">Notifications</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu.Item>
      <Menu.Item>
        <Menu.Header>Financials</Menu.Header>
        <Menu.Menu>
          <Menu.Item>
            <Link to="financials/fee-statement">Fees Statement</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="financials/payment-information">Payment Information</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu.Item>
      <Menu.Item>
        <Menu.Header>Academics</Menu.Header>
        <Menu.Menu>
          <Menu.Item>
            <Link to="academics/provisional-results">Provisional Results</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="academics/register-units">Register Units</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu.Item>
      <Menu.Item>
        <Menu.Header>Settings</Menu.Header>
        <Menu.Menu>
          <Menu.Item>
            <Link to="settings/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="settings/account">Account</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">Log Out</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu.Item>
    </Menu>
  );
}

export default FloatingSideMenu;
