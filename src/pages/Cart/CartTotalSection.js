import React from 'react';

class CartTotalSection extends React.Component {
  render() {
    const { totalPrice, shippingFee } = this.props;
    return (
      <section>
        <div className="cartTotalSection">
          <div className="cartTotalTable">
            <p>
              <span class="detail">
                <em class="tit">
                  총 <em id="totalGoodsCnt">상품</em>의 금액
                </em>
                ￦<strong id="totalGoodsPrice">{totalPrice}</strong>
              </span>

              <span id="deliveryCalculateNone">
                +<em class="tit">배송비</em> ￦
                <strong id="totalDeliveryCharge">{shippingFee}</strong>
              </span>
              <span class="total">
                =<em class="tit">총 주문금액</em>￦
                <strong id="totalSettlePrice">
                  {Number(totalPrice) + shippingFee}
                </strong>
              </span>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default CartTotalSection;
