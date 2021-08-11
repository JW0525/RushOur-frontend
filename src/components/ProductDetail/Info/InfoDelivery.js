/*eslint-disable*/

import React from 'react';
import { withRouter } from 'react-router-dom';

export class InfoDelivery extends React.Component {
  render() {
    let { tapDelivery, moveDetail, moveDelivery } = this.props;
    return (
      <div className="infoDelivery">
        <div className="tap">
          <ul ref={tapDelivery}>
            <li className="tapDeactivated" onClick={moveDetail}>
              상품상세정보
            </li>
            <li className="tapActivated" onClick={moveDelivery}>
              배송/교환 및 반품안내
            </li>
          </ul>
        </div>
        <div className="contentsDelivery">
          <span>
            ■ 배송비: 기본배송료는 2,500원입니다. (도서, 산간, 오지 일부지역은
            배송비가 추가될 수 있습니다. <br />
            ■ 택배사: 우체국 택배를 이용합니다. <br />■ 배송가능 지역: 국내
            배송/해외 배송은 불가 합니다.
          </span>
          <h6>
            <br />■ 홈페이지에서 구매한 경우
          </h6>
          <span>
            러쉬코리아 홈페이지에서 구매한 제품은 홈페이지를 통해서만 교환이
            가능합니다. <br />
            고객님의 변심에 의한 반품인 경우 상품 및 서비스를 공급받은 날로부터
            7일 이내 가능하며, 미개봉 제품만 가능합니다. <br />
            <br />
            고객센터(010-2134-5032)로 반품 접수를 받고 있으며, 지정 택배사를
            이용하여 상품 회수 후 교환/반품 여부에 관한 안내가 이뤄집니다.
            <br />
            <br />
            *고객변심으로 인한 교환시 초도 택배 비용을 포함한 반품 택배 비용이
            부과됩니다. <br />
            *상품결함으로 인한 교환의 경우 러쉬코리아에서 택배비용을 부담합니다.{' '}
            <br />
            *프레쉬 마스크를 포함하여 냉장배송을 받은 제품은 교환이 불가합니다.{' '}
            <br />
            고객센터 010-2314-5032
          </span>
        </div>
        <div className="howToUse">
          <table>
            <tbody>
              <tr>
                <th>사용 방법</th>
                <td>
                  소중한 보물이 가득한 바다의 건강함으로 당신의 얼굴과 몸을
                  맡겨보세요. 소금 알갱이가 휩쓸고 지나간 당신의 피부는 비단보다
                  부드러워질 거랍니다.
                </td>
              </tr>
              <tr>
                <th>보관시 유의사항</th>
                <td>직사광선을 피해 서늘한 곳에 보관해 주세요.</td>
              </tr>
              <tr>
                <th>사용상의 유의사항</th>
                <td>
                  미세한 입자가 함유되어 있는 스크럽세안제 사용시 입자가 눈에
                  들어가지 아니하도록 할 것. 헹굴 때 눈을 감고 눈에 들어가지
                  아니하도록 할 것. 입자가 눈에 들어갔을 때에는 비비지 말고 물로
                  씻어내고. 그대로 남아있는 경우에는 전문의를 찾아 상담할
                  것(피부적용 제품류는 어린이용 로션, 크림 및 오일, 메이크업용
                  제품, 면도용 제품, 기초화장용 제품을 말한다)
                </td>
              </tr>
              <tr>
                <th>제조일 및 사용기한</th>
                <td>제조일자로부터 14개월</td>
              </tr>
              <tr>
                <th>제조국/제조 판매업자</th>
                <td>제조원: LUSH JAPAN CO./제조판매업자:(주)러쉬코리아</td>
              </tr>
              <tr>
                <th>전성분</th>
                <td>상세페이지 참고</td>
              </tr>
              <tr>
                <th>용량 또는 중량</th>
                <td>120g, 250g</td>
              </tr>
              <tr>
                <th>제품 주요 사양</th>
                <td>모든 피부용</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
