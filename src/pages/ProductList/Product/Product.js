import React, { Component } from 'react';
import Label from './Label';
import { withRouter } from 'react-router-dom';
import './Product.scss';

class Product extends Component {
  render() {
    const { img, name, price, tag } = this.props;
    return (
      <div
        className="product"
        onClick={() => {
          console.log(this.props.id);
          this.props.history.push(`/productDetail/${this.props.id}`);
        }}
      >
        <img src={img} alt={name} />
        <div className="label">
          {tag &&
            tag.map((tag, i) => {
              return <Label name={tag} key={i} />;
            })}
        </div>
        <p className="name">{name}</p>
        <p className="price">₩{Math.floor(price).toLocaleString('ko-KR')}</p>
      </div>
    );
  }
}

export default withRouter(Product);
