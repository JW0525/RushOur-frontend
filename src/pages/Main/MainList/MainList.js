import React, { Component } from 'react';
import Product from '../../ProductList/Product/Product';
import { API } from '../../../config';
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
    fetch(`${API.PRODUCTLIST}?tag=new&limit=8&offset=0`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          listArr: data.products,
        });
        console.log('data:', data);
        // console.log('api data', data);
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
    let currentSlider = listSlider;
    currentSlider = currentSlider + listSlider;

    if (currentSlider <= -100 * (listArr.length / 4)) {
      currentSlider = -100;
    } else {
      currentSlider = listSlider + -100;
    }

    this.setState({
      listSlider: currentSlider,
    });
  };

  render() {
    const { listArr, listSlider } = this.state;

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
                  <Product
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    img={product.thumbnail}
                    id={product.id}
                  />
                );
              })}
          </ul>

          <div className="listButton">
            <button className="leftButton" onClick={this.slideLeft}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="rightButton" onClick={this.slideRight}>
              <i className="fas fa-chevron-right"></i>
            </button>
            <div className="pageCount">
              <span>{this.state.listSlider / -10 / 10 + 1}</span>
              <span>/</span>
              <span>{listArr && listArr.length / 4}</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainList;
