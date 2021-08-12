import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart';
import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';

class Routes extends Component {
  constructor() {
    super();
    this.state = {
      categoryId: 1,
      subCategoryId: 0,
    };
  }

  categoryHandler = (_categoryId, _subCategoryId) => {
    this.setState({
      categoryId: _categoryId,
      subCategoryId: _subCategoryId,
    });
  };

  render() {
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
          <Route exact path="/" component={Main} />
          <Route
            exact
            path="/list/:categoryId/:subcategoryId"
            render={() => (
              <ProductList
                categoryHandler={categoryHandler}
                categoryId={categoryId}
                subCategoryId={subCategoryId}
              />
            )}
          />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/productDetail/:id" component={ProductDetail} />
          <Route exact path="/list" component={ProductList} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
