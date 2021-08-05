import React, { Component } from 'react';
import './ListHeader.scss';

export class ListHeader extends Component {
  render() {
    return (
      <div className="listHeader">
        <div
          className="listHeaderImg"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/lotion.jpg')`,
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
