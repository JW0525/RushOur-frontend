import React, { Component } from 'react';
import MainListCom from './MainListCom';
import './MainList.scss';

class MainList extends Component {
  constructor() {
    super();
    this.state = {
      productInfo: [],
      listSlider: 0,
    };
  }
  componentDidMount() {
    fetch('/data/MainListData.json')
      // fetch(`${API.PRODUCTLIST}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productInfo: data,
        });
        console.log(data);
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
    const { listSlider, productInfo } = this.state;

    this.setState({
      listSlider:
        listSlider === -100 * (productInfo.length - 1) ? 0 : listSlider - 100,
    });
  };

  render() {
    const { productInfo, listSlider } = this.state;

    return (
      <section className="mainContents01">
        <div className="mainList">
          <h2>나만 알고 싶은 향기</h2>

          <ul
            className="listSlide"
            style={{ transform: `translateX(${listSlider}%)` }}
          >
            {productInfo &&
              productInfo.map(product => {
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
          <button className="leftButton" onClick={this.slideLeft}>
            <i class="fas fa-chevron-left"></i>
          </button>
          <button className="rightButton" onClick={this.slideRight}>
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="mainAside"></div>
      </section>
    );
  }
}

export default MainList;
