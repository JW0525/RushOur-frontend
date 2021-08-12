import React, { Component } from 'react';
import './SignUp.scss';
import { API } from '../../config.js';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      ...this.state,
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSignUp = () => {
    fetch(`${API}/user/signup`, {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        name: this.state.name,
        nickname: this.state.nickname,
        email: this.state.email,
        phone_number: this.state.phone_number,
        address: this.state.address,
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.MESSAGE === 'SUCCESS') {
          alert('회원가입이 되신 것을 축하합니다.');
          localStorage.setItem('token', response.token);
          this.props.history.push('/');
        } else {
          alert('잘못 기입하셨습니다. 입력 정보를 다시 확인해주세요.');
        }
      });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="signUpContainer">
          <div className="titleContainer">
            <h2>JOIN US</h2>
            <div className="stepContainer">
              <span className="currentStep">정보입력</span>
              <span className="nextStepMark">&gt;</span>
              <span>가입완료</span>
            </div>
          </div>
          <div className="infoTitle">
            <h3>기본정보</h3>
            <p> 표시는 반드시 입력하셔야 하는 항목입니다.</p>
          </div>
          <hr />
          <div className="infoContainer">
            <table className="infoTable">
              <tr className="tableWrapper">
                <td className="mark">&#9642;</td>
                <td className="infoContentsTitle">아이디</td>
                <td>
                  <input
                    className="inputBox"
                    id="username"
                    name="username"
                    onChange={this.handleInput}
                  />
                </td>
              </tr>
              <tr className="tableWrapper">
                <td className="mark">&#9642;</td>
                <td className="infoContentsTitle">비밀번호</td>
                <td>
                  <input
                    className="inputBox"
                    id="password"
                    type="password"
                    name="password"
                    onChange={this.handleInput}
                  />
                </td>
              </tr>
              <tr className="tableWrapper">
                <td className="mark">&#9642;</td>
                <td className="infoContentsTitle">비밀번호확인</td>
                <td>
                  <input className="inputBox" id="pwCheck" type="password" />
                </td>
              </tr>
              <tr className="tableWrapper">
                <td className="mark">&#9642;</td>
                <td className="infoContentsTitle">이름</td>
                <td>
                  <input
                    className="inputBox"
                    id="name"
                    name="name"
                    onChange={this.handleInput}
                  />
                </td>
              </tr>
              <tr className="tableWrapper">
                <td className="nonmark"></td>
                <td className="infoContentsTitle">닉네임</td>
                <td>
                  <input
                    className="inputBox"
                    id="nickname"
                    name="nickname"
                    onChange={this.handleInput}
                  />
                </td>
              </tr>
              <tr className="tableWrapper">
                <td className="mark">&#9642;</td>
                <td className="infoContentsTitle">이메일</td>
                <td>
                  <input
                    className="inputBoxSub"
                    id="email"
                    name="email"
                    onChange={this.handleInput}
                  />
                  <select className="emailSelectBox">
                    <option>직접입력</option>
                    <option>naver.com</option>
                    <option>hanmail.net</option>
                    <option>daum.net</option>
                    <option>nate.com</option>
                    <option>hotmail.com</option>
                    <option>gmail.com</option>
                    <option>icloud.com</option>
                  </select>
                </td>
                <div className="agreementCheck">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="checkboxEmail"
                  />
                  <label for="checkboxEmail">
                    <p>정보/이벤트 메일 수신에 동의합니다.</p>
                  </label>
                </div>
              </tr>

              <tr className="tableWrapper">
                <td className="mark">&#9642;</td>
                <td className="infoContentsTitle">휴대폰번호</td>
                <td>
                  <input
                    className="inputBox"
                    id="phoneNumber"
                    name="phone_number"
                    placeholder="- 없이 입력하세요."
                    onChange={this.handleInput}
                  />
                </td>
                <div className="agreementCheck">
                  <input type="checkbox" id="checkboxSns" name="checkbox" />
                  <label for="checkboxSns">
                    <p>정보/이벤트 SNS 수신에 동의합니다.</p>
                  </label>
                </div>
              </tr>

              <tr className="tableWrapper">
                <td className="nonmark"></td>
                <td className="infoContentsTitle">주소</td>
                <td>
                  <input
                    className="inputBoxSub"
                    id="address"
                    name="address"
                    onChange={this.handleInput}
                  />
                  <button className="postnumSearchBtn">우편번호검색</button>
                </td>
              </tr>
              <tr className="tableWrapper">
                <td className="nonmark"></td>
                <td className="infoContentsTitle"></td>
                <td>
                  <input className="inputBox" id="primaryAddress" />
                </td>
                <td>
                  <input className="inputBoxSecond" id="detailAddress" />
                </td>
              </tr>
            </table>
            <hr />
            <button className="signUpBtn" onClick={this.handleSignUp}>
              회원가입
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
