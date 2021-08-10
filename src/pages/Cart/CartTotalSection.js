import React from 'react';
class CartTotalSection extends React.Component {
  render() {
    return (
      <section>
        <div className="cartTotalSection">
          <div className="cartTotalTable">
            <p>
              <span class="detail">
                <em class="tit">
                  총 <em id="totalGoodsCnt">1</em> 개의 금액
                </em>{' '}
                ￦<strong id="totalGoodsPrice">140,000</strong>
              </span>
              <span id="deliveryCalculateNone">
                +<em class="tit">배송비</em> ￦
                <strong id="totalDeliveryCharge">2,500</strong>
              </span>
              <span class="total">
                =<em class="tit">총 주문금액</em>￦
                <strong id="totalSettlePrice">142,500</strong>
              </span>
            </p>
          </div>
        </div>
        <div className="productDelButton">
          <button className="productDel"> 삭제 하기</button>
        </div>
      </section>
    );
  }
}
export default CartTotalSection;
