import React, { Component } from 'react';
import ListContents from './component/ListContents';
import './Nav.scss';

export class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isProductListOn: false,
      listItem: [],
    };
  }

  componentDidMount() {
    fetch('/data/menuList.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          listItem: data.categories,
        });
      });
  }

  render() {
    const { listItem } = this.state;
    const { categoryHandler } = this.props;
    return (
      <div className="nav">
        <h1>LUSH</h1>
        <ul>
          <li className="productBtn">
            제품
            <div className="navList">
              <div class="dropdown-content">
                {listItem.map((category, i) => {
                  return (
                    <ListContents
                      key={i}
                      firstCategoryId={category.category_id}
                      main={category.name}
                      subCategoryData={category.sub_categories}
                      categoryHandler={categoryHandler}
                    />
                  );
                })}
              </div>
            </div>
          </li>
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
