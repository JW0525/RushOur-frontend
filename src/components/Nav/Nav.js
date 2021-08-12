import React, { Component } from 'react';
import ListContents from './component/ListContents';
import { API } from '../../config';
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
    fetch(API.NAVIGATOR)
      .then(res => res.json())
      .then(data => {
        this.setState({
          listItem: data.navigators,
        });
      });
  }

  goToProfile = () => {
    console.log('hi');
  };

  render() {
    const { listItem } = this.state;
    const { categoryHandler } = this.props;
    return (
      <div className="nav">
        <img
          className="logo"
          src="/images/rushour_logo.png"
          alt="RUSHOUR LOGO"
        />
        <ul>
          <li className="productBtn">
            제품
            <div className="navList">
              <div class="dropdown-content">
                {listItem &&
                  listItem.map((category, i) => {
                    return (
                      <ListContents
                        key={i}
                        navigatorInfo={category}
                        firstCategoryId={category.category_id}
                        main={category.name}
                        subCategoryData={category.subcategories}
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
          <i className="fas fa-search"></i>
          <i className="fas fa-shopping-bag"></i>
          <i
            className="fas fa-user-circle"
            onClick={() => this.goToProfile}
          ></i>
        </div>
      </div>
    );
  }
}

export default Nav;
