import React, { Component } from 'react';
import './ListContents.scss';

export class ListContents extends Component {
  render() {
    const { main, subData } = this.props;
    return (
      <div className="listContents">
        <h3>{main}</h3>
        <ul>
          {subData.map((data, i) => {
            return (
              <li className="categoryList" key={i}>
                {data.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListContents;
