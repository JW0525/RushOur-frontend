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
      priceSort: '',
    };
  }

  productListFetch = (prevProps, prevState) => {
    const { subcategoryId, categoryId } = this.props.match.params;
    const urlChecker = Number(subcategoryId)
      ? `${
          API.PRODUCTLIST
        }?category=${categoryId}&subcategory=${subcategoryId}&sort=${
          this.state.priceSort && this.state.priceSort
        }`
      : `${API.PRODUCTLIST}?sort=${
          this.state.priceSort && this.state.priceSort
        }`;

    if (prevProps) {
      if (
        this.props !== prevProps ||
        this.state.priceSort !== prevState.priceSort
      ) {
        fetch(urlChecker)
          .then(res => res.json())
          .then(data => {
            this.setState({
              productInfo: data.products,
            });
          });
      }
    } else {
      fetch(urlChecker)
        .then(res => res.json())
        .then(data => {
          this.setState({
            productInfo: data.products,
          });
        });
    }
  };

  componentDidMount() {
    this.productListFetch();
  }

  componentDidUpdate(prevProps, prevState) {
    this.productListFetch(prevProps, prevState);
  }

  priceSorter = price => {
    this.setState({
      priceSort: price,
    });
  };

  render() {
    console.log('price:', this.state.priceSort);
    const { priceSorter } = this;
    const { productInfo } = this.state;
    const { categoryHandler } = this.props;
    const { params } = this.props.match;

    return (
      <div className="productList">
        <ListHeader idInfo={params} />
        <ListMenu idInfo={params} priceSorter={priceSorter} />
        <div className="productContainer">
          {productInfo &&
            productInfo.map(product => {
              return (
                <Product
                  key={product.id}
                  name={product.name}
                  idInfo={params}
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

export default withRouter(ProductList);
