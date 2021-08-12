import React from 'react';

class CartListSection extends React.Component {
  render() {
    const {
      id,
      name,
      price,
      img,
      plusBtn,
      minusBtn,
      total,
      itemNum,
      deleteItems,
      size,
    } = this.props;

    return (
      <tbody className="cartListTableBody">
        <tr>
          <td>
            <button
              className="checkBoxBody"
              name={id}
              onClick={() => deleteItems(id)}
            >
              X
            </button>
          </td>
          <td>
            <div className="productThumb">
              <img className="cartImage" alt={name} src={img} />
              <p className="productInfo">{name}</p>
              <p className="productSize">{size}</p>
            </div>
          </td>

          <td>
            <div className="buttonAmount">
              <button name={id} onClick={minusBtn}>
                -
              </button>
              {itemNum}
              <button name={id} onClick={plusBtn}>
                +
              </button>
            </div>
          </td>
          <td>
            <p> ₩ {Math.floor(price).toLocaleString('ko-KR')}원 </p>
          </td>
          <td> ₩{total}원</td>
          <td className="selecteMenu">
            <p> ₩2500원 (택배)</p>
          </td>
        </tr>
      </tbody>
    );
  }
}
export default CartListSection;
