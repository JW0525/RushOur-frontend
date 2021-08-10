import React from 'react';
class CartListSection extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }
  render() {
    const { name, price, discount, image } = this.props.cartData;
    return (
      <section className="cartListSetion">
        <div className="cartList">
          <div className="cartListTableTitleBox">
            <p className="cartListTableTitle"> 일반상품 (개수)</p>
          </div>
          <table className="cartListTable">
            <thead className="cartListTableIndex">
              <tr>
                <th> 이미지 </th>
                <th> 상품정보 </th>
                <th> 판매가 </th>
                <th> 수량 </th>
                <th> 배송비 </th>
                <th> 합계 </th>
                <th> 선택 </th>
              </tr>
            </thead>
            <tbody className="cartListTableBody">
              <tr>
                <td>
                  <img className="cartImage" alt={name} src={image} />
                </td>
                <td className="productInfo">{name}</td>
                <td>
                  <p className="realPrice"> {price}원 </p>
                  <p> {discount}원 </p>
                </td>
                <td>
                  <div className="quantityTable">
                    <input
                      className="cartQuantity"
                      value="1"
                      type="text"
                      min="1"
                      max="100"
                      disabled
                    />
                    <div className="quantitybtn">
                      <button className="quantityPlus">
                        <img
                          alt="plusQuantity"
                          src="https://img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_up.gif"
                        />
                      </button>
                      <button className="quantityMinus">
                        <img
                          alt="plusQuantity"
                          src="https://img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_down.gif"
                        />
                      </button>
                      <button className="quantityChange"> 변경</button>
                    </div>
                  </div>
                </td>
                <td> 무료(조건 필수)</td>
                <td> 16,200원</td>
                <td className="selecteMenu">
                  <p>
                    <button className="cartOrder">주문하기</button>
                  </p>
                  <p>
                    <button className="cartDelete">x 삭제</button>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="CartFooter">
            <span className="deliveryDes">
              [기본배송/총 상품 금액 30,000원 이상 구매 시 무료배송]
            </span>
            <span className="totalDes">
              상품구매금액 00원 + 배송비 0원(무료/유료)-상품할인금액 00원 =
              합계: 00000원
            </span>
          </div>
        </div>
      </section>
    );
  }
}
export default CartListSection;
