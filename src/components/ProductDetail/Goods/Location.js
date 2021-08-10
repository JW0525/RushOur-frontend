/*eslint-disable*/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

//loaction은 따로 해주세요.

export class Location extends React.Component {
  render() {
    const { product } = this.props;
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
            {/* <option>{product.categories && product.categories[0]}</option> */}
          </select>
        }
        <p>&gt;</p>
        {
          <select>
            {' '}
            {/* <{product.subcategories &&
              product.subcategories.map((e, i) => {
                return <option>{e.name}</option>;
              })} */}
          </select>
        }
      </div>
    );
  }
}
