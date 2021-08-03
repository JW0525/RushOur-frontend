import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginId: '',
      loginPw: '',
      idBlankCheck: false, //공백체크
      pwBlankCheck: false,
      idValidCheck: false,
      pwValidCheck: false,
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div class="Wrap">
        <div class="contentsWrap">
          <div class="loginTextContainer">
            <h2 class="loginText">로그인</h2>
          </div>
          <div class="inputContainer">
            <div class="inputIdContainer">
              <span class="ldIcon">
                <img
                  src="https://lush.co.kr/data/skin/front/howling/img/etc/icon_id.png"
                  alt=""
                />
              </span>
              <input type="text" id="loginId" placeholder="아이디" />
            </div>
            <div class="inputPwContainer">
              <span class="pwIcon">
                <img
                  src="https://lush.co.kr/data/skin/front/howling/img/etc/icon_password.png"
                  alt=""
                />
              </span>
              <input type="password" id="loginPw" placeholder="비밀번호" />
            </div>
          </div>
          <div class="loginSave">
            <input type="checkbox" id="loginSave">
              아이디저장
            </input>
          </div>
          <button class="loginSubmitBtn">로그인</button>
          <div class="join">회원가입</div>
        </div>
      </div>
    );
  }
}

export default Login;
