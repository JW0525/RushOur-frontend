import React, { Component } from 'react';
import './ListMenu.scss';

export class ListMenu extends Component {
  constructor() {
    super();
    this.state = {
      listButton: false,
    };
  }

  buttonHandler = () => {
    this.setState({
      listButton: !this.state.listButton,
    });
  };
  render() {
    return (
      <>
        <div className="listMenu">
          <div className="listMenuHeader">
            <h2>보디</h2>
            <div className="listMenuBtn">
              <span
                onClick={this.buttonHandler}
                className={this.state.listButton && 'inactive'}
              >
                추천순&nbsp;
                <i class="fas fa-caret-down"></i>
              </span>

              {this.state.listButton && (
                <ul>
                  <li>추천순</li>
                  <li>판매인기순</li>
                  <li>낮은가격순</li>
                  <li>높은가격순</li>
                  <li>리뷰많은순</li>
                  <li>신제품순</li>
                </ul>
              )}
            </div>
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
