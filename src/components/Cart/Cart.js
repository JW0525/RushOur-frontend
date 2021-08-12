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
      quantity: 1,
    };
  }
  componentDidMount() {
    fetch('/data/cartData.json')
      .then(res => res.json())
      .then(cartData => {
        this.setState({
          cartData: cartData.CART_LIST[0],
          quantity: cartData.CART_LIST[0].quantity,
        });
      });
  }

  plusClick = () => {
    if (this.state.quantity < 20) {
      this.setState({ quantity: this.state.quantity + 1 });
    }
  };

  minusClick = () => {
    if (this.state.quantity > 1) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };

  render() {
    const { cartData, quantity } = this.state;
    return (
      <main>
        <div className="cart">
          <section className="cartTitleSection">
            <div className="cartTitle">SHOPPING CART</div>
          </section>
          <CartListSection
            cartData={cartData}
            quantity={quantity}
            plusClick={this.plusClick}
            minusClick={this.minusClick}
          />
          <CartTotalSection cartData={cartData} />
          <CartButton cartData={cartData} />
        </div>
      </main>
    );
  }
}
export default Cart;
