import React from 'react';
class CartTotalSection extends React.Component {
  render() {
    return (
      <section>
        <div className="cartTotalSection">
          <table className="cartTotalTable">
            <thead>
              <tr>
                <th> 총 상품금액</th>
                <th> 총 배송비</th>
                <th> 총 할인금액</th>
                <th> 총 결제예정금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 00000원</td>
                <td> +0원(유료일 땐, 2500원)</td>
                <td> 0000원</td>
                <td> = 0000원 </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}
export default CartTotalSection;
