import React, { Component } from 'react';
import { API } from '../../../config';
import './PageButton.scss';

export class PageButton extends Component {
  constructor() {
    super();
    this.state = {
      navInfo: 0,
      location: [],
    };
  }

  componentDidMount() {
    const { idInfo } = this.props;
    fetch(API.NAVIGATOR)
      .then(res => res.json())
      .then(data => {
        console.log('data:', data);
        this.setState({
          navInfo: data.navigators[idInfo.categoryId - 1],
          location: idInfo,
        });
      });
  }

  render() {
    const { pageHandler } = this.props;
    const { categoryId, subcategoryId } = this.props.idInfo;
    const { navInfo } = this.state;
    let arrNum;
    if (navInfo && !Number(subcategoryId)) {
      (arrNum = []).length = Math.ceil(navInfo.products_count / 16);
      arrNum.fill(0);
    } else if (navInfo) {
      (arrNum = []).length = Math.ceil(
        navInfo.subcategories[Number(subcategoryId) - 1].products_count / 16
      );
      arrNum.fill(0);
    }

    console.log(arrNum);

    return (
      <div className="pageButton">
        {arrNum &&
          arrNum.map((arr, i) => {
            return (
              <button key={i} onClick={() => pageHandler(16, i * 16)}>
                {i + 1}
              </button>
            );
          })}
      </div>
    );
  }
}

export default PageButton;
