/*eslint-disable*/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export class Location extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }
  componentDidMount = () => {
    fetch('http://localhost:3000/data/productDetail/productList.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          productList: data,
        });
      });
  };

  render() {
    return (
      <div className="location">
        <h6>홈</h6>
        <p>&gt;</p>
        <select>
          {this.state.productList.map(e => (
            <option>{e.name}</option>
          ))}
        </select>
        <p>&gt;</p>
        <select>
          {this.state.productList.map((e, i) => {
            return this.state.productList[i].sub_categories.map(k => {
              return <option>{k.name}</option>;
            });
          })}
        </select>
      </div>
    );
  }
}
