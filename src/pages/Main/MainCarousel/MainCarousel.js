import React, { Component } from 'react';
import ImgCom from '../ImgCom';
import './MainCarousel.scss';

class MainCarousel extends Component {
  constructor() {
    super();
    this.state = {
      sliderPosition: 0,
      sliderArr: [],
    };
  }

  componentDidMount() {
    fetch('/data/visualData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          sliderArr: data,
        });
      });
  }

  slideLeft = () => {
    const { sliderPosition } = this.state;
    this.setState({
      sliderPosition: sliderPosition === 0 ? 0 : sliderPosition + 100,
    });
  };

  slideRight = () => {
    const { sliderPosition, sliderArr } = this.state;
    this.setState({
      sliderPosition:
        sliderPosition === -100 * (sliderArr.length - 1)
          ? 0
          : sliderPosition - 100,
    });
  };

  render() {
    const { sliderPosition, sliderArr } = this.state;

    console.log(`translateX(${sliderPosition}%)`);
    return (
      <div className="visualWrap">
        <div className="visualSlide">
          <div
            className="imgWrap"
            style={{ transform: `translateX(${sliderPosition}%)` }}
          >
            {sliderArr &&
              sliderArr.map(sliderElement => {
                return (
                  <div className="slide" key={sliderElement.id}>
                    {/* <ImgCom alt={sliderElement.alt} src={sliderElement} /> */}
                  </div>
                );
              })}
          </div>
          <button className="leftButton" onClick={this.slideLeft}>
            1
          </button>
          <button className="rightButton" onClick={this.slideRight}>
            2
          </button>
        </div>
      </div>
    );
  }
}
export default MainCarousel;
