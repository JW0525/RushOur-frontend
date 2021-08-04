import React, { Component } from 'react';
import ListContents from './component/ListContents';
import './Nav.scss';

export class Nav extends Component {
  constructor() {
    super();
    this.state = {
      productList: false,
      listItem: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.5.253:8000/products/navigation', {})
      .then(res => res.json())
      .then(data => {
        this.setState({
          listItem: data.categories,
        });
        console.log(data);
      });
  }

  menuHandler = () => {
    const { productList } = this.state;
    this.setState({
      productList: !productList,
    });
  };

  render() {
    const { productList, listItem } = this.state;
    const { menuHandler } = this;
    return (
      <div className="nav">
        <h1>LUSH</h1>
        <ul>
          <li onMouseEnter={menuHandler} onMouseOut={menuHandler}>
            제품
          </li>
          {productList && (
            <div className="navList">
              {listItem.map((category, i) => {
                return (
                  <ListContents
                    key={i}
                    main={category.name}
                    subData={category.sub_categories}
                  />
                );
              })}
            </div>
          )}
          <li>러쉬 소개</li>
          <li>매장 안내</li>
          <li>스파</li>
          <li>이벤트</li>
        </ul>
        <div className="navIcon">
          <i class="fas fa-search"></i>
          <i class="fas fa-shopping-bag"></i>
          <i class="fas fa-user-circle"></i>
        </div>
      </div>
    );
  }
}

export default Nav;
