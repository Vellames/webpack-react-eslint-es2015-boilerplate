// NPM imports
import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  /**
   * Render a menu item
   * @param {*} item menu item
   * @param {*} index index of menu item
   */
  renderItem(item, index) {
    // If item has a child, render a dropdown menu
    if (item.child) {
      return (
        <li key={index} className='dropdown'>
          <a href='#'
            className='dropdown-toggle'
            data-toggle='dropdown'
            role='button'
            aria-haspopup='true'
            aria-expanded='false'>
            {item.title}
            <span className='caret'></span>
          </a>
          <ul className="dropdown-menu">
            {
              item.child.map((child, indexChild) => (
                <li key={indexChild}><Link to={item.url}>{child.title}</Link></li>
              ))
            }
          </ul>
        </li>
      );
    }

    // If not, render a normal menu
    return (<li key={index}><Link to={item.url}>{item.title}</Link></li>);
  }

  render() {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar-collapse' aria-expanded='false'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <a className='navbar-brand' href='#'>{this.props.brand}</a>
          </div>
          <div className='collapse navbar-collapse' id='navbar-collapse'>
            <ul className='nav navbar-nav'>
              {
                this.props.itens.map((item, index) => (
                  this.renderItem(item, index)
                ))
              }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;
