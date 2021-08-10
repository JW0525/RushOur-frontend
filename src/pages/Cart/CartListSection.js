import React from 'react';
class CartListSection extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }
  render() {
    const { name, price, image } = this.props.cartData;
    return (
      <section className="cartListSetion">
        <div className="cartList">
          <div className="cartListTableTitleBox">
            <p className="cartListTableTitle"> 제품</p>
          </div>
          <table className="cartListTable">
            <thead className="cartListTableIndex">
              <tr>
                <th className="checkBoxWrap">
                  <input type="checkbox" className="checkBox" />
                </th>
                <th className="productInfo"> 제품정보 </th>
                <th> 수량 </th>
                <th> 금액 </th>
                <th> 합계금액 </th>
                <th> 배송비 </th>
              </tr>
            </thead>
            <tbody className="cartListTableBody">
              <tr>
                <td>
                  <input type="checkbox" className="checkBoxBody"></input>
                </td>
                <td>
                  <div className="productThumb">
                    <img className="cartImage" alt={name} src={image} />
                    <p className="productInfo">{name}</p>
                  </div>
                </td>

                <td>
                  <div className="goodsPurchase">
                    <div className="buttonAmount">
                      <button>
                        <p>-</p>
                      </button>
                      <button>
                        <p>1</p>
                      </button>
                      <button>
                        <p>+</p>
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <p> ₩{price}원 </p>
                </td>
                <td> ₩16,200원</td>
                <td className="selecteMenu">
                  <p> ₩2500원 (택배)</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}
export default CartListSection;
