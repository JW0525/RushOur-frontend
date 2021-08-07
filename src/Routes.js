import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import ProductList from './pages/ProductList/ProductList';

class Routes extends Component {
  constructor() {
    super();
    this.state = {
      categoryId: 1,
      subCategoryId: 0,
    };
  }

  categoryHandler = id => {
    if (id === '보디') {
      this.setState({
        categoryId: 1,
        subCategoryId: 0,
      });
    } else {
      this.setState({
        subCategoryId: id,
      });
    }
    console.log(id);
  };

  render() {
    console.log('router this.state:', this.state);
    const { categoryHandler } = this;
    const { categoryId, subCategoryId } = this.state;
    return (
      <Router>
        <Nav
          categoryHandler={categoryHandler}
          category={categoryId}
          subId={subCategoryId}
        />
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route
            exact
            path="/list"
            render={() => (
              <ProductList
                categoryHandler={categoryHandler}
                category={categoryId}
                subId={subCategoryId}
              />
            )}
          />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
