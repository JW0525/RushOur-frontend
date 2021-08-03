import React, { Component } from 'react';

class ImgCom extends Component {
  render() {
    const { src, alt } = this.props;
    return (
      <>
        <img src={src} alt={alt}></img>
      </>
    );
  }
}

export default ImgCom;
