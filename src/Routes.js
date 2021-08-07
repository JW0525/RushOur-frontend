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
      categoryInfo: {
        categoryId: 1,
      },
      subCategoryInfo: {
        subCategoryId: 0,
      },
    };
  }

  categoryHandler = (_categoryId, _subCategoryId) => {
    if (_subCategoryId) {
      this.setState({
        categoryInfo: { categoryId: _categoryId },
        subCategoryInfo: { subCategoryId: _subCategoryId },
      });
    } else {
      this.setState({
        categoryId: _categoryId,
        subCategoryId: 0,
      });
    }
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
                subCategoryId={subCategoryId}
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
