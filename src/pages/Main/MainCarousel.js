import React, { Component } from 'react';
import ImgCom from './ImgCom';

class MainCarousel extends Component {
  constructor() {
    super();
    this.state = {
      firstImg: 0,
      sliderArr: [],
      info: {},
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/visualData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          sliderArr: data,
        });
      });
  }

  slideLeft = () => {
    const { firstImg } = this.state;
    firstImg === 0
      ? this.setState({ firstImg: 0 })
      : this.setState({ firstImg: firstImg + 100 });
  };

  slideRight = () => {
    const { firstImg, sliderArr } = this.state;
    firstImg === -100 * (sliderArr.length - 1)
      ? this.setState({ firstImg: 0 })
      : this.setState({ firstImg: firstImg - 100 });
  };

  render() {
    const { firstImg, sliderArr } = this.state;

    return (
      <>
        <div className="visualWrap">
          <div className="visualSlide">
            <ul
              className="imgWrap"
              style={{ transform: `translateX(${firstImg}%)` }}
            >
              {sliderArr &&
                sliderArr.map(ele => {
                  return (
                    <li className="slide">
                      <ImgCom key={ele.id} alt={ele.alt} src={ele.src} />
                    </li>
                  );
                })}
            </ul>
            <button className="leftButton" onClick={this.slideLeft}>
              1
            </button>
            <button className="rightButton" onClick={this.slideright}>
              2
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default MainCarousel;
