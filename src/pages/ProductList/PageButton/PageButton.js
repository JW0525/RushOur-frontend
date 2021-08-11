import React, { Component } from 'react';
import { API } from '../../../config';
import './PageButton.scss';

export class PageButton extends Component {
  constructor() {
    super();
    this.state = {
      navInfo: [],
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
    const { categoryId, subcategoryId } = this.props.idInfo;
    const { navInfo } = this.state;
    let arrNum;
    (arrNum = []).length = Math.ceil(this.props.productInfo.length / 16);
    arrNum.fill(0);
    console.log(arrNum);

    return (
      <div className="pageButton">
        {arrNum &&
          arrNum.map((arr, i) => {
            return <button key={i}>{i + 1}</button>;
          })}
      </div>
    );
  }
}

export default PageButton;
