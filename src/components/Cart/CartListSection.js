import React from 'react';
import CartList from './CartListSection/CartList';

class CartListSection extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: '',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ productList: this.state.productList });
    }, 1000);
  }

  createProduct(product) {
    this.setState({
      products: this.state.productList.push(product),
    });
  }

  render() {
    const { id, product_name, quantity, size, price, image_url } =
      this.props.cartData;
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
            {/* {this.props.cartData.map(obj => {
              return <Component name={obj.name} age={obj.age} />;

              //obj에 있는 필요한 정보들을 프로퍼티? 로 넘겨줌(props할 때 잘 써야해)
              // map과 컴포넌트를 함께 사용할 때 대충 이런식으로 생겼다는거임.
            })} */}
            {this.state.productList &&
              this.state.productList.map(e => (
                <CartList
                  id={e.id}
                  product_name={e.product_name}
                  quantity={e.quantity}
                  size={e.size}
                  price={e.price}
                  image_url={e.image_url}
                  plusClick={this.props.plusClick}
                  minusClick={this.props.minusClick}
                />
              ))}
          </table>
        </div>
      </section>
    );
  }
}
export default CartListSection;
