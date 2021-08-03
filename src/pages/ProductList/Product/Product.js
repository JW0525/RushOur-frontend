import React, { Component } from 'react';
import './Product.scss';

export class Product extends Component {
  render() {
    return (
      <div className="product">
        <img src="/images/product/product01.png" alt="" />
        <div className="label">
          {/*  버튼 컴포넌트 화 */}
          <span>국내제조</span>
          <span>VEGAN</span>
          {/*  버튼 컴포넌트 화 */}
        </div>
        <p className="name">허벌리즘 100g/250g</p>
        <p className="hashtag">
          <span>#클렌저</span>
          <span>#부드러운아침세안</span>
        </p>
        <p className="price">22,0$</p>
      </div>
    );
  }
}

export default Product;
