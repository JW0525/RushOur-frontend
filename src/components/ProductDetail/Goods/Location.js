/*eslint-disable*/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export class Location extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
  }

  componentDidMount = () => {
    fetch('http://data/productDetail/product.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          product: data.sub_categories[0],
        });
      });
  };

  render() {
    let { product } = this.state;
    return (
      <div className="location">
        <h6>홈</h6>
        <p>&gt;</p>
        <select>
          <option>러쉬</option>
        </select>
        <p>&gt;</p>
        {
          <select>
            {' '}
            {product.categories &&
              product.categories.map((e, i) => {
                return <option>{e.name}</option>;
              })}
          </select>
        }
        <p>&gt;</p>
        {
          <select>
            {' '}
            {product.subcategories &&
              product.subcategories.map((e, i) => {
                return <option>{e.name}</option>;
              })}
          </select>
        }
      </div>
    );
  }
}
