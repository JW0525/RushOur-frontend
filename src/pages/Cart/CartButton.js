import React from 'react';
class CartButton extends React.Component {
  render() {
    const { handleCartBtn } = this.props;
    return (
      <section>
        <div className="cartButton">
          <button className="cartKeepShopping">전체삭제</button>
          <button className="cartOrderbtn" onClick={handleCartBtn}>
            주문하기
          </button>
        </div>
      </section>
    );
  }
}
export default CartButton;
