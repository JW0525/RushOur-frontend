import React, { Component } from 'react';
import './Label.scss';

export class Label extends Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <span className="labelBtn">{name}</span>
      </>
    );
  }
}

export default Label;
