import React, { Component } from 'react';
import './MainListCom.scss';

class MainListCom extends Component {
  render() {
    const { img, name, price, id } = this.props;
    return (
      <li className="mainProduct" key={id}>
        <div className="thumb">
          <img alt={name} src={img} />
        </div>
        <p className="name">{name}</p>
        <p className="price">₩{Math.floor(price).toLocaleString('ko-KR')}</p>
      </li>
    );
  }
}

export default MainListCom;
