// NPM imports
import React from 'react';

// Components imports
import Table from './../../components/Table.jsx';

class ExpenseTypeListPage extends React.Component {
  tableItens() {
    return [
      { id: 1, name: 'Luz' },
      { name: 'Agua', id: 2 },
      { id: 100, name: 'Telefone' },
      { id: 1, name: 'Internet' },
    ];
  }

  render() {
    return (
      <div className="container-fluid">

        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Expense Type</h3>
          </div>
          <div className="panel-body">
            Panel content
          </div>
        </div>

        <Table
          fields={[
            { key: 'id', display: 'ID' },
            { key: 'name', display: 'Name' },
          ]}
          rows={this.tableItens()}
        />
      </div>
    );
  }
}

export default ExpenseTypeListPage;
