import React, { Component } from 'react';
import MainListCom from './MainListCom';
import './MainList.scss';

class MainList extends Component {
  constructor() {
    super();
    this.state = {
      listArr: [],
      listSlider: 0,
    };
  }
  componentDidMount() {
    fetch('/data/MainListData.json')
      // fetch(`${API.PRODUCTLIST}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          listArr: data,
        });
        // console.log('api data', data);
      });
  }
  s;

  slideLeft = () => {
    const { listSlider } = this.state;
    this.setState({
      listSlider: listSlider === 0 ? 0 : listSlider + 100,
    });
  };

  slideRight = () => {
    const { listSlider, listArr } = this.state;
    let currentSlider = listSlider;
    currentSlider = currentSlider + listSlider;

    console.log('버튼 누르기전', currentSlider);
    console.log('arr', listArr.length / 3);
    console.log('arr2', -100 * (listArr.length / 3));

    if (currentSlider <= -100 * (listArr.length / 3)) {
      currentSlider = -100;
    } else {
      currentSlider = listSlider + -100;
    }
    console.log('버튼 누른후', currentSlider);

    this.setState({
      listSlider: currentSlider,
    });
  };

  render() {
    const { listArr, listSlider } = this.state;
    console.log('현재 슬라이더 리스트', listSlider);
    return (
      <section className="mainContents01">
        <div className="mainList">
          <h2>나만 알고 싶은 향기</h2>

          <ul
            className="listSlide"
            style={{ transform: `translateX(${listSlider}%)` }}
          >
            {listArr &&
              listArr.map(product => {
                return (
                  <MainListCom
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    tag={product.tags}
                    img={product.thumbnail}
                  />
                );
              })}
          </ul>
          <div className="listButton">
            <button className="leftButton" onClick={this.slideLeft}>
              <i class="fas fa-chevron-left"></i>
            </button>
            <button className="rightButton" onClick={this.slideRight}>
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className="mainAside"></div>
      </section>
    );
  }
}

export default MainList;
