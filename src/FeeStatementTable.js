import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import { Table, Header } from 'semantic-ui-react';

const tableData = [
  {
    referenceNumber: 'ICS-2209',
    description: 'Examination fees',
    debit: 1000,
    credit: 2500
  },
  {
    referenceNumber: 'RDT2-1443',
    description: 'Internet fee',
    debit: 0,
    credit: 340
  },
  {
    referenceNumber: 'TS-25543',
    description: 'Registration fee',
    debit: 200,
    credit: 0
  },
  {
    referenceNumber: 'CT-414',
    description: 'Computer fee',
    debit: 0,
    credit: 500
  }
];

export default class FeeStatementTable extends Component {
  state = {
    column: null,
    data: tableData,
    direction: null
  };

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending'
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending'
    });
  };

  render() {
    const { column, data, direction } = this.state;

    return (
      <Fragment>
        <Header as="h3">Fee statement</Header>
        <Table sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === 'referenceNumber' ? direction : null}
                onClick={this.handleSort('referenceNumber')}
              >
                Reference number
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'description' ? direction : null}
                onClick={this.handleSort('description')}
              >
                Description
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'debit' ? direction : null}
                onClick={this.handleSort('debit')}
              >
                Debit amount
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'credit' ? direction : null}
                onClick={this.handleSort('credit')}
              >
                Credit amount
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.map(data, ({ description, debit, referenceNumber, credit }) => (
              <Table.Row key={referenceNumber}>
                <Table.Cell>{referenceNumber}</Table.Cell>
                <Table.Cell>{description}</Table.Cell>
                <Table.Cell>{debit}</Table.Cell>
                <Table.Cell>{credit}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Fragment>
    );
  }
}