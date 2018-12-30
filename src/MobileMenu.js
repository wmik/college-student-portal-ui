import React from 'react';
import { Icon, Menu, Dropdown } from 'semantic-ui-react';
import { Link } from '@reach/router';

function MobileMenu() {
  return (
    <Menu icon="labeled" fluid widths={4} fixed="bottom">
      <Menu.Item name="home">
        <Dropdown pointing="top left" icon={<Icon name="home" size="big" />}>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="home/dashboard">Dashboard</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="home/notifications">Notifications</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <p>Home</p>
      </Menu.Item>

      <Menu.Item name="financials">
        <Dropdown pointing="top left" icon={<Icon name="dollar" size="big" />}>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="financials/fee-statement">Fees Statement</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="financials/payment-information">
                Payment Information
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <p>Financials</p>
      </Menu.Item>

      <Menu.Item name="academics">
        <Dropdown pointing="top right" icon={<Icon name="book" size="big" />}>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="academics/provisional-results">
                Provisional Results
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="academics/register-units">Register Units</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <p>Academics</p>
      </Menu.Item>
      <Menu.Item name="settings">
        <Dropdown
          pointing="top right"
          icon={<Icon name="settings" size="big" />}
        >
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="settings/profile">Profile</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="settings/account">Account</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/">Log Out</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <p>Settings</p>
      </Menu.Item>
    </Menu>
  );
}

export default MobileMenu;
