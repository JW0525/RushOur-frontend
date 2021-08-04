import React, { Component } from 'react';
import './Product.scss';

export class Product extends Component {
  render() {
    console.log(this.props);
    const { img, name, price, tag } = this.props;
    return (
      <div className="product">
        <img src={img} alt={name} />
        <div className="label">
          {/*  버튼 컴포넌트 화 */}
          <span className="labelBtn">국내제조</span>
          <span className="labelBtn">VEGAN</span>
          {/*  버튼 컴포넌트 화 */}
        </div>
        <p className="name">{name}</p>
        <p className="hashtag">
          <span>#클렌저</span>
          <span>#부드러운아침세안</span>
        </p>
        <p className="price">{Math.floor(price).toLocaleString('ko-KR')}₩</p>
      </div>
    );
  }
}

export default Product;
