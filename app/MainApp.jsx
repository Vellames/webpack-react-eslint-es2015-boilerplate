// NPM imports
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// Components
import Menu from './components/Menu.jsx';

// Pages
import LoginPage from './pages/login/LoginPage.jsx';
import ExpenseTypeListPage from './pages/expense_type/List.jsx';

class MainApp extends React.Component {
  menuItens() {
    return [
      { title: 'Expense', url: '/expensetype' },
      { title: 'Test2', url: '#' },
      {
        title: 'Test3',
        url: '#',
        child: [
          { title: 'Child', url: '#' },
        ],
      },
    ];
  }

  render() {
    return (
      <Router>
        <div>
          <Menu
            brand='Home'
            itens={this.menuItens()}
          />

          <Route exact path="/" component={LoginPage}/>
          <Route path="/expensetype" component={ExpenseTypeListPage}/>

        </div>
      </Router>
    );
  }
}

export default MainApp;
