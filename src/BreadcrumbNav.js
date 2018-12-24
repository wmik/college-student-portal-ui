import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';

function BreadCrumbNav() {
  return (
    <Breadcrumb size="big">
      <Breadcrumb.Section>Settings</Breadcrumb.Section>
      <Breadcrumb.Divider icon="right chevron" />
      <Breadcrumb.Section link>Profile</Breadcrumb.Section>
    </Breadcrumb>
  );
}

export default BreadCrumbNav;
