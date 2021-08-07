import React, { Component } from 'react';
import { API } from '../../../config';
import './ListHeader.scss';

export class ListHeader extends Component {
  constructor() {
    super();
    this.state = {
      backImageInfo: [],
    };
  }

  // 백엔드에 API 요청해서 백그라운드 구성하기
  // componentDidMount() {
  //   fetch(`${API.PRODUCTLIST}/products`)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         backImageInfo: data,
  //       });
  //       console.log(data);
  //     });
  // }

  render() {
    console.log('ListHeader this.props:', this.props);
    return (
      <div className="listHeader">
        <div
          className="listHeaderImg"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/${this.props.category}${this.props.subCategoryId}.jpg')`,
          }}
        >
          <h1>보디</h1>
          <p>늘 당신의 피부를 향긋하고 건강하게 빛내줄 거예요</p>
        </div>
      </div>
    );
  }
}

export default ListHeader;
