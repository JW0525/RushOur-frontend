import React, { Component } from 'react';
import CartListSection from './CartListSection';
import CartButton from './CartButton';
import './Cart.scss';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartData: [],
    };
  }
  componentDclassNameMount() {
    fetch('http://10.58.5.11:8000/carts', {
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => res.json())
      .then(cartData => {
        if (cartData.MESSAGE) {
          this.setState({
            cartData: cartData.MESSAGE,
          });
        } else {
          this.setState({
            cartData: cartData.Cart,
            totalPrice: cartData.total_price,
            shipping: cartData.shipping,
          });
        }
      });
  }

  deleteItems = ({ className, e }) => {
    fetch('http://10.58.5.11:8000/carts?className=$[className}', {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => res.json())
      .then(cartData => {});

    const { cartData } = this.state;

    const filterList = cartData.filter(product => {
      return product.className !== Number(e.target.name);
    });

    this.setState({
      cartData: filterList,
    });
  };

  plusBtn = e => {
    const { cartData } = this.state;
    const changeList = [...cartData];
    changeList.forEach(product => {
      if (Number(e.target.name) === product.className) {
        product.quantity = product.quantity + 1;
      }
    });
    this.setState({
      cartData: changeList,
    });
  };

  minusBtn = e => {
    const { cartData } = this.state;
    const changeList = [...cartData];
    changeList.forEach(product => {
      if (Number(e.target.name) === product.className) {
        product.quantity = product.quantity - 1;
        if (product.quantity < 1) {
          product.quantity = 1;
        }
      }
    });
    this.setState({
      cartData: changeList,
    });
  };

  handleCartBtn = () => {
    const { cartData } = this.state;
    if (cartData === 0) {
      alert('상품을 선택해 주세요.');
    } else {
      alert('주문이 완료 되었습니다.');
    }
  };

  render() {
    const { cartData, totalPrice, shipping } = this.state;
    const { plusBtn, minusBtn } = this;
    console.log('this.state.cartData:', cartData);

    return (
      <main>
        <div className="cart">
          <section className="cartTitleSection">
            <div className="cartTitle">SHOPPING CART</div>
          </section>
          <section className="cartListSetion">
            <div className="cartList">
              <div className="cartListTableTitleBox">
                <p className="cartListTableTitle"> 제품</p>
              </div>
              <table className="cartListTable">
                <thead className="cartListTableIndex">
                  <tr>
                    <th className="checkBoxWrap">삭제</th>
                    <th className="productInfo"> 제품정보 </th>
                    <th> 수량 </th>
                    <th> 금액 </th>
                    <th> 합계금액 </th>
                    <th> 배송비 </th>
                  </tr>
                </thead>
                {!cartData.length ? (
                  <p className="emptyCart">
                    장바구니에 담겨진 상품이 없습니다.
                  </p>
                ) : (
                  cartData.map(product => {
                    return (
                      <CartListSection
                        key={product.className}
                        name={product.product_name}
                        size={product.size}
                        price={product.product_price}
                        img={product.image_url}
                        itemNum={product.quantity}
                        plusBtn={plusBtn}
                        minusBtn={minusBtn}
                        total={product.price}
                        deleteItems={this.deleteItems}
                        size={product.size}
                      />
                    );
                  })
                )}
              </table>
            </div>
          </section>

          <section>
            <div className="cartTotalSection">
              <div className="cartTotalTable">
                <p>
                  <span class="detail">
                    <em class="tit">
                      총 <em className="totalGoodsCnt">상품</em>의 금액
                    </em>
                    ￦
                    <strong className="totalGoodsPrice">
                      {!cartData.length
                        ? 0
                        : Math.floor(totalPrice).toLocaleString('ko-KR')}
                    </strong>
                  </span>
                  <span className="deliveryCalculateNone">
                    +<em class="tit">배송비</em> ￦
                    <strong className="totalDeliveryCharge">
                      {!cartData.length
                        ? 0
                        : Math.floor(shipping).toLocaleString('ko-KR')}
                    </strong>
                  </span>
                  <span class="total">
                    =<em class="tit">총 주문금액</em>￦
                    <strong className="totalSettlePrice">
                      {!cartData.length
                        ? 0
                        : Math.floor(
                            Number(totalPrice) + shipping
                          ).toLocaleString('ko-KR')}
                    </strong>
                  </span>
                </p>
              </div>
            </div>
          </section>

          <CartButton cartData={cartData} handleCartBtn={this.handleCartBtn} />
        </div>
      </main>
    );
  }
}
export default Cart;
