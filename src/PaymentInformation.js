import React, { Fragment } from 'react';
import { Message, Icon, Header } from 'semantic-ui-react';

function BankInfo({ children, color, success }) {
  return (
    <Message size="tiny" color={color} success={success}>
      <Message.Header>
        Banking information <Icon name="info circle" size="small" />
      </Message.Header>
      <Message.List>{children}</Message.List>
    </Message>
  );
}

function PaymentInformation() {
  return (
    <Fragment>
      <Header as="h2">Payment information</Header>
      <Header as="h3">Equity Bank</Header>
      <BankInfo color="brown">
        <Message.Item>
          <b>Account number</b>: 70970872039
        </Message.Item>
      </BankInfo>
      <Header as="h3">KCB</Header>
      <BankInfo success>
        <Message.Item>
          <b>Account number</b>: 89678243423
        </Message.Item>
      </BankInfo>
      <Header as="h3">Cooperative Bank</Header>
      <BankInfo color="green">
        <Message.Item>
          <b>Account number</b>: 648290123353
        </Message.Item>
      </BankInfo>
    </Fragment>
  );
}

export default PaymentInformation;
