import React, { Component } from 'react';
import './SignUp.scss';

class SignUp extends Component {
  state = {
    id: '',
    password: '',
    passwordCheck: '',
    username: '',
    nickname: '',
    email: '',
    phoneNumber: '',
    address: '',
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div class="wrapper">
        <div class="signUpContainer">
          <h2>JOIN US</h2>
          <div class="stepContainer">
            <span>
              약관동의 &nbsp;&nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span class="currentStep">정보입력</span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;&nbsp;가입완료
            </span>
          </div>
          <div class="basicInfoRequire">
            <h3>기본정보</h3>
            <span>
              <i className="fas fa-square"></i>표시는 반드시 입력하셔야 하는
              항목입니다.
            </span>
          </div>
          <div className="userInfoInputHere">
            <div className="inputContainer">
              <i className="fas fa-square"></i>
              <label htmlFor="idInputHere">아이디</label>
              <input className="inputField" id="id" />
            </div>

            <div className="inputContainer">
              <i className="fas fa-square"></i>
              <label htmlFor="pwInputHere">비밀번호</label>
              <input className="inputField" id="pw" type="password" />
            </div>

            <div className="inputContainer">
              <i className="fas fa-square"></i>
              <label htmlFor="pwCheckInputHere">비밀번호 확인</label>
              <input className="inputField" id="pwCheck" type="password" />
            </div>
            <div className="errorMessage"></div>
            <div className="inputContainer">
              <i className="fas fa-square"></i>
              <label htmlFor="nameInputHere">이름</label>
              <input className="inputField" id="userName" />
            </div>
            <div className="inputContainer">
              <label htmlFor="nicknameInputHere">닉네임</label>
              <input className="inputField" id="userNickName" />
            </div>
            <div className="inputContainer">
              <i className="fas fa-square"></i>
              <label htmlFor="emailInputHere">이메일</label>
              <input className="inputField" id="userEmail" />
              <select className="chooseEmail">
                <option>직접입력</option>

                <i className="fas fa-chevron-down"></i>
              </select>
              <div className="formCheckBox">
                <input className="phoneCheckBox" type="checkbox"></input>
                <label className="advertisementReceiveCheck">
                  정보/이벤트 메일 수신에 동의합니다.
                </label>
              </div>
            </div>

            <div className="inputContainer">
              <i className="fas fa-square"></i>
              <label htmlFor="phoneNumberInputHere">휴대폰번호</label>
              <input className="inputField" id="userPhoneNumber" />
              <div className="formCheckBox">
                <input className="phoneCheckBox" type="checkbox"></input>
                <label className="advertisementReceiveCheck">
                  정보/이벤트 SMS 수신에 동의합니다.
                </label>
              </div>
            </div>
            <div className="inputContainer">
              <label htmlFor="addressInputHere">주소</label>
              <input className="inputField" id="mainAddress" />
              <button>우편번호검색</button>
            </div>
            <div className="inputContainer">
              <input className="inputField" id="primaryAddress" />
              <input className="inputField" id="detailAddress" />
            </div>
          </div>

          <div className="signUpButton">
            <button>회원가입</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
