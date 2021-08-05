import React, { Component } from 'react';
import ListMenuSorter from './component/ListMenuSorter';
import './ListMenu.scss';

export class ListMenu extends Component {
  constructor() {
    super();
    this.state = {
      islistButtonOn: false,
    };
  }

  buttonHandler = () => {
    this.setState({
      islistButtonOn: !this.state.islistButtonOn,
    });
  };
  render() {
    const { islistButtonOn } = this.state;
    const { buttonHandler } = this;
    return (
      <>
        <div className="listMenu">
          <div className="listMenuHeader">
            <h2>보디</h2>
            <ListMenuSorter
              buttonOn={islistButtonOn}
              buttonHandler={buttonHandler}
            />
          </div>
          <div className="listMenuCategory">
            <ul>
              <li>전체()</li>
              <li>클랜저()</li>
              <li>로션()</li>
              <li>핸드 앤 풋()</li>
              <li>마사지 바()</li>
              <li>더스팅 파우더()</li>
              <li>쉐이빙 크림()</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default ListMenu;
