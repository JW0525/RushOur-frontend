import React, { Component } from 'react';
import ListMenu from './ListMenu/ListMenu';
import ListHeader from './ListHeader/ListHeader';
import Product from './Product/Product';
import './ProductList.scss';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      productInfo: [],
      categoryInfo: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.5.253:8000/products/category/1?sort=', {})
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
                tag={product.tag}
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
