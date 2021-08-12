import React, { Component } from 'react';
import ListMenu from './ListMenu/ListMenu';
import ListHeader from './ListHeader/ListHeader';
import Product from './Product/Product';
import { withRouter } from 'react-router-dom';
import { API } from '../../config';
import './ProductList.scss';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      productInfo: [],
      categoryInfo: [],
    };
  }

  categoryChanger = idInfo => {
    console.log(idInfo);
    // this.props.history.push('/list/category=1/subcateogry=4');
  };

  componentDidMount() {
    fetch('/data/productList.json')
      // fetch(`${API.PRODUCTLIST}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productInfo: data.products,
          categoryInfo: data.category,
        });
      });
  }

  render() {
    const { categoryChanger } = this;
    const { productInfo, categoryInfo } = this.state;
    const { categoryId, subCategoryId, categoryHandler } = this.props;
    const { params } = this.props.match;
    return (
      <div className="productList">
        <ListHeader idInfo={params} />
        <ListMenu idInfo={params} categoryChanger={categoryChanger} />
        <div className="productContainer">
          {productInfo &&
            productInfo.map(product => {
              return (
                <Product
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  tag={product.tags}
                  img={product.thumbnail}
                  id={product.id}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ProductList);
