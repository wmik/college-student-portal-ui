import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';

function BreadCrumbNav({ section, page }) {
  return (
    <Breadcrumb size="big">
      <Breadcrumb.Section>{section}</Breadcrumb.Section>
      <Breadcrumb.Divider icon="right chevron" />
      <Breadcrumb.Section link>{page}</Breadcrumb.Section>
    </Breadcrumb>
  );
}

export default BreadCrumbNav;
