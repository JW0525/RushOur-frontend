import React, { Component } from 'react';
import './ListContents.scss';

export class ListContents extends Component {
  render() {
    const { main, subData } = this.props;
    return (
      <div className="listContents">
        <h2>{main}</h2>
        <ul>
          {subData.map((data, i) => {
            return <li key={i}>{data.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ListContents;
