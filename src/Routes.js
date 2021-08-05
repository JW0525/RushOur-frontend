import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import ProductList from './pages/ProductList/ProductList';
import Main from './pages/Main/Main';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/list" component={ProductList} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
