/*eslint-disable*/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

//location은 따로 해주세요.

export class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    fetch(`http://10.58.3.65:8000/navigator/`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          nav: res,
        });
      });
  }

  render() {
    const { nav } = this.state;
    return (
      <div className="location">
        <h6>홈</h6>
        <p>&gt;</p>
        <select>
          <option>러쉬</option>
        </select>
        <p>&gt;</p>
        <select>
          {' '}
          {/* <option>{nav.navigators && nav.navigators[0].name}</option> */}
        </select>
        <p>&gt;</p>
        {
          <select>
            {' '}
            {/* <{navigators.subcategories &&
              navigators.subcategories.map((e, i) => {
                return <option>{e.name}</option>;
              })} */}
          </select>
        }
      </div>
    );
  }
}
