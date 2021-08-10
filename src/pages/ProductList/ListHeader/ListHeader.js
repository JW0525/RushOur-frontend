import React, { Component } from 'react';
import { API } from '../../../config';
import './ListHeader.scss';

export class ListHeader extends Component {
  constructor() {
    super();
    this.state = {
      headerInfo: {},
    };
  }

  listHeaderFetch = prevProps => {
    const { subcategoryId, categoryId } = this.props.idInfo;
    const isCategoryOrSub = Number(subcategoryId) ? 'subcategory' : 'category';
    const urlChecker = Number(subcategoryId)
      ? `${API.SUBCATEGORY}/${subcategoryId}`
      : `${API.CATEGORY}/${categoryId}`;

    if (prevProps) {
      if (this.props !== prevProps) {
        fetch(urlChecker)
          .then(res => res.json())
          .then(data => {
            this.setState({
              headerInfo: data[isCategoryOrSub],
            });
          });
      }
    } else {
      fetch(urlChecker)
        .then(res => res.json())
        .then(data => {
          this.setState({
            headerInfo: data[isCategoryOrSub],
          });
        });
    }
  };

  //처음 렌더링될 때 데이터 받아옴
  componentDidMount() {
    this.listHeaderFetch();
  }

  //업데이트 시 렌더링될 때 데이터 받아옴
  componentDidUpdate(prevProps) {
    this.listHeaderFetch(prevProps);
  }

  render() {
    const { headerInfo } = this.state;
    return (
      <div className="listHeader">
        <div
          className="listHeaderImg"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${headerInfo.image_url})`,
          }}
        >
          <h1>{headerInfo && headerInfo.name}</h1>
          <p>{headerInfo && headerInfo.description}</p>
        </div>
      </div>
    );
  }
}

export default ListHeader;
