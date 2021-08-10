import React, { Component } from 'react';
import CartListSection from './CartListSection';
import CartTotalSection from './CartTotalSection';
import CartButton from './CartButton';
import './Cart.scss';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartData: {},
      quantity: 0,
    };
  }
  componentDidMount() {
    fetch('/data/cartData.json')
      .then(res => res.json())
      .then(cartData => {
        this.setState({
          cartData: cartData[0],
          quantity: cartData[0],
        });
      });
  }
  render() {
    const { cartData } = this.state;
    return (
      <main>
        <div className="cart">
          <section className="cartTitleSection">
            <div className="cartTitle">SHOPPING CART</div>
          </section>
          <CartListSection cartData={cartData} />
          <CartTotalSection cartData={cartData} />
          <CartButton cartData={cartData} />
        </div>
      </main>
    );
  }
}
export default Cart;
