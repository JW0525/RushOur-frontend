import React, { Component } from 'react';
import ListMenuSorter from './component/ListMenuSorter';
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
    const { categoryChanger, idInfo } = this.props;
    const { buttonHandler } = this;
    console.log('idInfo: ', idInfo, 'menuInfo: ', menuInfo);
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
            />
          </div>
          <div className="listMenuCategory">
            <ul>
              <li onClick={categoryChanger(idInfo)}>
                전체({menuInfo && menuInfo.products_count})
              </li>
              {menuInfo.subcategories &&
                menuInfo.subcategories.map((subCategory, i) => {
                  return (
                    <li
                      key={subCategory.subcategory_id}
                      onClick={categoryChanger}
                    >
                      {subCategory.name}({subCategory.products_count})
                    </li>
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
