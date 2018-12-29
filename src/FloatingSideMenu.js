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
          <Menu.Item>
            <Link to="academics/register-units">Register units</Link>
          </Menu.Item>
          <Menu.Item name="Exam status" link />
        </Menu.Menu>
      </Menu.Item>
      <Menu.Item>
        <Menu.Header>Settings</Menu.Header>
        <Menu.Menu>
          <Menu.Item>
            <Link to="settings/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item name="Account">
            <Link to="settings/account">Account</Link>
          </Menu.Item>
          <Menu.Item name="Log out" link />
        </Menu.Menu>
      </Menu.Item>
    </Menu>
  );
}

export default FloatingSideMenu;
