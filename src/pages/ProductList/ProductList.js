import React, { Component } from 'react';
import ListMenu from './ListMenu/ListMenu';
import ListHeader from './ListHeader/ListHeader';
import Product from './Product/Product';
import './ProductList.scss';
import { API } from '../../config';

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
      });
  }

  productHandler = arr => {
    return arr.map(product => {
      return (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          tag={product.tags}
          img={product.thumbnail}
        />
      );
    });
  };

  render() {
    const { productInfo, categoryInfo } = this.state;
    const { category, subId, categoryHandler } = this.props;
    console.log('Product List this.props: ', this.props);
    return (
      <div className="productList">
        <ListHeader category={category} subId={subId} />
        <ListMenu categoryHandler={categoryHandler} />
        <div className="productContainer">
          {this.productHandler(productInfo)}
        </div>
      </div>
    );
  }
}

export default ProductList;
