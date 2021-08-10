import React, { Component } from 'react';
import ListMenu from './ListMenu/ListMenu';
import ListHeader from './ListHeader/ListHeader';
import Product from './Product/Product';
import './ProductList.scss';
// import { API } from '../../config';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      productInfo: [],
      categoryInfo: [],
    };
  }

  componentDidMount() {
    fetch('/data/productList.json')
      // fetch(`${API.PRODUCTLIST}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productInfo: data.products,
          categoryInfo: data.category,
        });
        console.log(data);
      });
  }

  render() {
    const { productInfo, categoryInfo } = this.state;

    return (
      <div className="productList">
        <ListHeader />
        <ListMenu />
        <div className="productContainer">
          {productInfo.map(product => {
            return (
              <Product
                key={product.id}
                name={product.name}
                price={product.price}
                tag={product.tags}
                img={product.thumbnail}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductList;
