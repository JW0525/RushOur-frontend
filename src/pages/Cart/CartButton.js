import React from 'react';
class CartButton extends React.Component {
  render() {
    const { handleCartBtn } = this.props;
    return (
      <section>
        <div className="cartButton">
          <button className="cartKeepShopping"> 쇼핑계속하기</button>
          <button className="cartOrderbtn" onClick={handleCartBtn}>
            주문하기
          </button>
        </div>
      </section>
    );
  }
}
export default CartButton;
