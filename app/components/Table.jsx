// NPM imports
import React from 'react';

class Table extends React.Component {
  /**
   * Ensure that the infos in row will be loaded in right column
   */
  renderData() {
    return this.props.rows.map((row, indexRow) => (
      <tr key={indexRow}>
        {
          this.props.fields.map((field, indexField) => (
            <td key={indexField}>{row[field.key]}</td>
          ))
        }
      </tr>
    ));
  }

  render() {
    return (
      <div className='table-responsive'>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              {
                this.props.fields.map((field, index) => (
                  <th key={index}>{field.display}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {this.renderData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
