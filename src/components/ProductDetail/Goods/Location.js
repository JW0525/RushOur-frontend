/*eslint-disable*/

import React from 'react';
import { withRouter } from 'react-router-dom';

//location은 따로 해주세요.

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      nav: {},
    };
  }

  componentDidMount() {
    fetch(`http://10.58.2.67:8000/navigator`)
      // fetch('http://localhost:3000/data/productDetail/navigator.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          nav: res,
        });
      });
  }

  // handleChange = value => {
  //   this.props.history.push(`/productDetail/${value}`);
  // };

  handleChange = e => {
    this.setState({ value: 1 });
    if (value === 1) {
      this.props.history.push('/main');
    }
  };

  render() {
    const { nav } = this.state;
    console.log(nav);
    return (
      <div className="location">
        <h6>홈</h6>
        <p>&gt;</p>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value={this.state.value} onChange={this.handleChange}>
            러쉬
          </option>
        </select>
        <p>&gt;</p>
        <select>
          {' '}
          <option>{nav.navigators && nav.navigators[0].name}</option>
        </select>
        <p>&gt;</p>
        {
          <select>
            {' '}
            {nav.navigators &&
              nav.navigators[0].subcategories.map((e, i) => {
                return <option>{e.name}</option>;
              })}
          </select>
        }
      </div>
    );
  }
}

export default withRouter(Location);
