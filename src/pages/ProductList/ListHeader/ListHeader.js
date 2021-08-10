import React, { Component } from 'react';
import { API } from '../../../config';
import './ListHeader.scss';

export class ListHeader extends Component {
  constructor() {
    super();
    this.state = {
      headerInfo: [],
    };
  }

  componentDidUpdate(prevProps) {
    console.log('fetch!');
    const { subCategoryId, categoryId } = this.props;
    const isCategoryOrSub = subCategoryId ? 'subcategory' : 'category';
    const urlChecker = subCategoryId
      ? `${API.SUBCATEGORY}/${subCategoryId}`
      : `${API.CATEGORY}/${categoryId}`;

    if (this.props !== prevProps) {
      fetch(urlChecker)
        .then(res => res.json())
        .then(data => {
          this.setState({
            headerInfo: data[isCategoryOrSub],
          });
          console.log('data', data[isCategoryOrSub]);
        });
    }
  }

  render() {
    const { headerInfo } = this.state;
    console.log('headerInfo:', headerInfo);

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
