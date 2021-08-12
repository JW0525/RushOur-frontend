/*eslint-disable*/

import React from 'react';
import { withRouter } from 'react-router-dom';

//location은 따로 해주세요.

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: {},
      showMenuCate: false,
      showMenuSubCate: false,
    };
  }

  componentDidMount() {
    fetch(`http://3.144.112.76:8000/navigator`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          nav: res,
        });
      });
  }

  showMenuCate = e => {
    e.preventDefault();
    this.setState({
      showMenuCate: true,
    });
  };

  showMenuCateDel = e => {
    e.preventDefault();
    this.setState({
      showMenuCate: false,
    });
  };

  showMenuSubCate = e => {
    e.preventDefault();
    this.setState({
      showMenuSubCate: true,
    });
  };

  showMenuSubCateDel = e => {
    e.preventDefault();
    this.setState({
      showMenuSubCate: false,
    });
  };

  render() {
    const { nav } = this.state;
    console.log(nav);
    return (
      <div className="location">
        <h6>홈</h6>
        <p>&gt;</p>
        <ul>
          <li className="dropDown">안녕</li>
          <ul className="dropDownMenu">
            <li>{nav.navigators && nav.navigators[0].name}</li>
          </ul>
        </ul>
        <p>&gt;</p>
        <ul>
          <li className="dropDown">안녕</li>
          <ul className="dropDownMenu">
            {nav.navigators &&
              nav.navigators[0].subcategories.map((e, i) => {
                return <li>{e.name}</li>;
              })}
          </ul>
        </ul>

        {/* <div>
          <button>러쉬</button>
        </div>
        <p>&gt;</p> */}

        {/* <div onMouseOver={this.showMenuCate}>
          <button>Show menu</button>
          {this.state.showMenuCate && (
            <div onMouseOut={this.showMenuCateDel}>
              <button>{nav.navigators && nav.navigators[0].name}</button>
            </div>
          )}
        </div> */}
        {/* 
        {
          <div>
            <button onMouseOver={this.showMenuSubCate}>Show menu</button>
            {this.state.showMenuSubCate && (
              <div>
                {nav.navigators &&
                  nav.navigators[0].subcategories.map((e, i) => {
                    return (
                      <div>
                        <button onMouseOut={this.showMenuSubCateDel}>
                          {e.name}
                        </button>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        } */}
      </div>
    );
  }
}

export default withRouter(Location);
