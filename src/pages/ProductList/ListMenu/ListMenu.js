import React, { Component } from 'react';
import ListMenuSorter from './component/ListMenuSorter';
import { Link } from 'react-router-dom';
import { API } from '../../../config';
import './ListMenu.scss';

export class ListMenu extends Component {
  constructor() {
    super();
    this.state = {
      islistButtonOn: false,
      menuInfo: [],
    };
  }

  // 처음 화면에 그려지기 위한 첫 API
  componentDidMount() {
    fetch(API.NAVIGATOR)
      .then(res => res.json())
      .then(data => {
        this.setState({
          menuInfo: data.navigators[0],
        });
      });
  }

  // props 업데이트 마다 갱신되는 API
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      fetch(API.NAVIGATOR)
        .then(res => res.json())
        .then(data => {
          this.setState({
            menuInfo: data.navigators[0],
          });
        });
    }
  }

  buttonHandler = () => {
    this.setState({
      islistButtonOn: !this.state.islistButtonOn,
    });
  };

  render() {
    const { islistButtonOn, menuInfo } = this.state;
    const { priceSorter, idInfo } = this.props;
    const { buttonHandler } = this;

    return (
      <>
        <div className="listMenu">
          <div className="listMenuHeader">
            <h2>
              {menuInfo.subcategories &&
                (Number(idInfo.subcategoryId) === 0
                  ? `${menuInfo.name}`
                  : `${
                      menuInfo.subcategories[Number(idInfo.subcategoryId) - 1]
                        .name
                    }`)}
            </h2>
            <ListMenuSorter
              buttonOn={islistButtonOn}
              buttonHandler={buttonHandler}
              priceSorter={priceSorter}
            />
          </div>
          <div className="listMenuCategory">
            <ul>
              <Link
                to={`/list/category=${idInfo.categoryId}/subcategory=0`}
                className="link"
              >
                <li>전체({menuInfo && menuInfo.products_count})</li>
              </Link>
              {menuInfo.subcategories &&
                menuInfo.subcategories.map((subCategory, i) => {
                  return (
                    <Link
                      to={`/list/category=${idInfo.categoryId}/subcategory=${subCategory.subcategory_id}`}
                      key={subCategory.subcategory_id}
                      className="link"
                    >
                      <li key={subCategory.subcategory_id}>
                        {subCategory.name}({subCategory.products_count})
                      </li>
                    </Link>
                  );
                })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default ListMenu;
