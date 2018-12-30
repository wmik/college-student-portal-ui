import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import { Table, Checkbox, Button, Header, Message } from 'semantic-ui-react';
import HintMessage from './HintMessage';
import Resize from './Resize';

const tableData = [
  { unitCode: 'ICS2209', unitName: 'Communication Skills' },
  { unitCode: 'BIT2312', unitName: 'Entrepreneurship' },
  { unitCode: 'CCS1000', unitName: 'Computer Systems' },
  { unitCode: 'BCT1414', unitName: 'Programming' }
];

export default class RegisterUnitsTable extends Component {
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
        <Header as="h3">Register units</Header>
        <HintMessage>
          <Message.Item>
            Select a table header to sort the table using the selected key
          </Message.Item>
          <Message.Item>Toggle the slider to select the unit</Message.Item>
        </HintMessage>
        <Table sortable celled fixed unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Year of study: Y2S3</Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'unitCode' ? direction : null}
                onClick={this.handleSort('unitCode')}
              >
                Unit Code
              </Table.HeaderCell>
              <Resize>
                {state =>
                  state.isMobile ? null : (
                    <Table.HeaderCell
                      sorted={column === 'unitName' ? direction : null}
                      onClick={this.handleSort('unitName')}
                    >
                      Unit Name
                    </Table.HeaderCell>
                  )
                }
              </Resize>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.map(data, ({ unitName, unitCode }) => (
              <Table.Row key={unitCode}>
                <Table.Cell collapsing>
                  <Checkbox slider />
                </Table.Cell>
                <Table.Cell>{unitCode}</Table.Cell>
                <Resize>
                  {state =>
                    state.isMobile ? null : <Table.Cell>{unitName}</Table.Cell>
                  }
                </Resize>
              </Table.Row>
            ))}
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Resize>
                {state => (state.isMobile ? null : <Table.HeaderCell />)}
              </Resize>
              <Table.HeaderCell colSpan={2}>
                <Button size="small" color="green">
                  Register
                </Button>
                <Button disabled size="small">
                  Approve All
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Fragment>
    );
  }
}
