import React, { Component } from 'react';
import './MainAside.scss';
import { API } from '../../../config';
import { withRouter } from 'react-router-dom';

class MainAside extends Component {
  constructor() {
    super();
    this.state = {
      listArr: [],
      listSlider: 0,
    };
  }
  componentDidMount() {
    fetch(API.BANNERS)
      .then(res => res.json())
      .then(data => {
        this.setState({
          listArr: data.Banners,
        });
        console.log('data', data);
        // setInterval(this.slideRight, 5000);
      });
  }

  slideLeft = () => {
    const { listSlider } = this.state;
    this.setState({
      listSlider: listSlider === 0 ? 0 : listSlider + 100,
    });
  };

  slideRight = () => {
    const { listSlider, listArr } = this.state;

    this.setState({
      listSlider:
        listSlider === -100 * (listArr.length - 1) ? 0 : listSlider - 100,
    });
  };

  goToCategory = id => {
    this.props.history.push(`/list/1/${id}`);
  };

  render() {
    const { listArr, listSlider } = this.state;
    return (
      <section className="mainContents02">
        <div className="bannerList">
          <ul
            className="bannerImg"
            style={{ transform: `translateX(${listSlider}%)` }}
          >
            {listArr &&
              listArr.map((sliderElement, i) => {
                return (
                  <img
                    alt={sliderElement.alt}
                    src={sliderElement.image_url}
                    key={i}
                  />
                );
              })}
          </ul>
        </div>
        <div className="asideButton">
          <button className="leftButton" onClick={this.slideLeft}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="rightButton" onClick={this.slideRight}>
            <i className="fas fa-chevron-right"></i>
          </button>
          <div className="pageCount">
            <span>{this.state.listSlider / -10 / 10 + 1}</span>
            <span>/</span>
            <span>{listArr && listArr.length}</span>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(MainAside);
