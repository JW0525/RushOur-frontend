import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';

// import 한 컴포넌트 경로

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/productDetail" component={ProductDetail} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
