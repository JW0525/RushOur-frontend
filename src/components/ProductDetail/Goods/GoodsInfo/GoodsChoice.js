/*eslint-disable*/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export class GoodsChoice extends React.Component {
  render() {
    return (
      <div className="goodsChoice">
        <h6 onClick={this.props.modalOff}>용량</h6>
        <select>
          <option value="HTML">러쉬</option>
          <option value={this.props.value}>러쉬</option>
          <option value="HTML">러쉬</option>
        </select>
      </div>
    );
  }
}
