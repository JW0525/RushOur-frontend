/*eslint-disable*/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default class CartList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { id, product_name, quantity, size, price, image_url } = this.props;

    return (
      <>
        <tbody className="cartListTableBody">
          <tr>
            <td>
              <input type="checkbox" className="checkBoxBody"></input>
            </td>
            <td>
              <div className="productThumb">
                <img className="cartImage" alt={product_name} src={image_url} />
                <p className="productInfo">{product_name}</p>
              </div>
            </td>
            <td>
              <div className="buttonAmount">
                <button onClick={this.props.minusClick}>
                  <p>-</p>
                </button>
                <button>
                  <p>{quantity}</p>
                </button>
                <button onClick={this.props.plusClick}>
                  <p>+</p>
                </button>
              </div>
            </td>
            <td>
              <p> ₩{price}원 </p>
            </td>
            <td> {price * this.props.quantity}원</td>
            <td className="selecteMenu">
              <p> ₩2500원 (택배)</p>
            </td>
          </tr>
        </tbody>
      </>
    );
  }
}
