import React, { Component } from 'react';
import './ListHeader.scss';

export class ListHeader extends Component {
  render() {
    return (
      <div>
        <div className="listHeader">
          <div className="listHeaderImg">
            <h1>보디</h1>
            <p>늘 당신의 피부를 향긋하고 건강하게 빛내줄 거예요</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ListHeader;
