import React, { Component } from 'react';
import './Login.scss';
// import { API } from '../../config';

class Login extends Component {
  constructor() {
    super();
    this.state = { id: '', pw: '' };
  }

  //인풋 핸들링
  handleInputValue = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  // 로그인정보 서버 전송
  // goToMain = e => {
  //   e.preventDefault();
  //   fetch('주소값넣기', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       account: this.state.id,
  //       password: this.state.pw,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(res => {
  //       if (res.Token) {
  //         localStorage.setItem('Token', res.Token);
  //         this.props.history.push('/');
  //       }
  //     });
  // };

  //회원가입으로 이동
  goToSignUp = () => {
    this.props.history.push('/SignUp');
  };

  //메인으로 이동
  goToMain = () => {
    this.props.history.push('/Main');
  };

  render() {
    return (
      <div class="wrap">
        <div class="loginContainer">
          <h2 class="loginText">로그인</h2>
          <div class="loginInputContainer">
            <form id="formLogin">
              <input
                onChange={this.handleInput}
                type="email"
                placeholder="아이디 (name@example.com)"
                class="id"
              />
              <input
                onChange={this.handleInput}
                type="password"
                placeholder="비밀번호"
                class="pw"
              />
            </form>
            <div class="loginSave">
              <label for="saveId">
                <input type="checkbox" class="loginSaveCheckbox" />
                아이디 저장
              </label>
            </div>
            <button class="login" onClick={this.goToMain}>
              <span>로그인</span>
            </button>
            <button class="signUp" onClick={this.goToSignUp}>
              회원가입
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
