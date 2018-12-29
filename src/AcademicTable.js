import _ from 'lodash';
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

const tableData = [
  { unitCode: 'ICS2209', unitName: 'Communication Skills', grade: 'C' },
  { unitCode: 'BIT2312', unitName: 'Entrepreneurship', grade: 'B' },
  { unitCode: 'CCS1000', unitName: 'Computer Systems', grade: 'A' },
  { unitCode: 'BCT1414', unitName: 'Programming', grade: 'B' }
];

export default class AcademicTable extends Component {
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
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'unitCode' ? direction : null}
              onClick={this.handleSort('unitCode')}
            >
              Unit Code
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'unitName' ? direction : null}
              onClick={this.handleSort('unitName')}
            >
              Unit Name
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'grade' ? direction : null}
              onClick={this.handleSort('grade')}
            >
              Grade
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, ({ unitName, grade, unitCode }) => (
            <Table.Row key={unitCode}>
              <Table.Cell>{unitCode}</Table.Cell>
              <Table.Cell>{unitName}</Table.Cell>
              <Table.Cell>{grade}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
}
