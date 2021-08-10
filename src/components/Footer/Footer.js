import React, { Component, Link } from 'react';
import './Footer.scss';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
  }

  emailSubscribe = () => {
    if (this.state.email !== 0) {
      return alert('준비 중 입니다.');
    }
  };

  render() {
    return (
      <div>
        <div className="footer">
          <div className="footerIconBox">
            <ul className="footerInline">
              <li className="footerIcon">
                <img src="/images/sign1.png" />
              </li>
              <li className="footerIcon">
                <img src="/images/sign2.png" />
              </li>
              <li className="footerIcon">
                <img src="/images/sign3.png" />
              </li>
              <li className="footerIcon">
                <img src="/images/sign4.png" />
              </li>
              <li className="footerIcon">
                <img src="/images/sign5.png" />
              </li>
              <li className="footerIcon">
                <img src="/images/sign6.png" />
              </li>
            </ul>
          </div>
          <div className="footerBottom">
            <div className="footerInner">
              <div className="footerSideInfoL">
                <span className="leftWrap">
                  <h1>LUSH</h1>
                  <p>
                    <span>고객센터</span> &nbsp;&nbsp; 8282-8282
                  </p>
                  <p>wecode@wecode.co.kr</p>
                  <p>
                    <span>상담전화</span> &nbsp;&nbsp;07/05 ~ 08/02
                  </p>
                  <p>
                    <span>상담TALK</span> &nbsp;&nbsp;10:00 ~ 16:00(평일)
                  </p>
                  <p className="comInfo">
                    <span>기업선물</span>&nbsp;&nbsp; 082-8282-8282
                  </p>
                  <p>wecode@wecode.wecode</p>
                </span>
              </div>
              <div className="footerSideInfoR">
                <div className="footerMenu">
                  <ul className="footerlist">
                    <li
                      className="footerMenuName"
                      onClick={this.emailSubscribe}
                    >
                      <a href="#">스카우트</a>
                    </li>
                    <li
                      className="footerMenuName"
                      onClick={this.emailSubscribe}
                    >
                      <a href="#">회사소개</a>
                    </li>
                    <li
                      className="footerMenuName"
                      onClick={this.emailSubscribe}
                    >
                      <a href="#" className="MenuNameColor">
                        개인정보처리방침
                      </a>
                    </li>
                    <li
                      className="footerMenuName"
                      onClick={this.emailSubscribe}
                    >
                      <a href="#">영상정보관리지침</a>
                    </li>
                    <li
                      className="footerMenuName"
                      onClick={this.emailSubscribe}
                    >
                      <a href="#">이용약관</a>
                    </li>
                    <li
                      className="footerMenuName"
                      onClick={this.emailSubscribe}
                    >
                      <a href="#">고객센터</a>
                    </li>
                  </ul>
                </div>
                <form className="footerEmail">
                  <input
                    type="text"
                    className="footerSearch"
                    placeholder="이메일 주소를 입력해주세요."
                  />

                  <button
                    className="footerButton"
                    onClick={this.emailSubscribe}
                  >
                    구독하기
                  </button>
                </form>
                <div className="footerCopyright">
                  <p>
                    서울특별시 강남구 삼성동 테헤란로 427 10층 | 사이트 운영자 :
                    주식회사 러시아워코리아 | 대표이사 : 한박황이최이
                    <br />
                    사업자 등록번호 : 082-82-82828 사업자정보확인 | 통신판매업
                    신고번호 : 2021-서울서초-8282 | 개인정보보호책임자 : 황도윤
                  </p>
                  <p className="copyright">
                    COPYRIGHT © RUSHOURKOREA.CO.LTD.ALL RIGHTS RESERVED
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
