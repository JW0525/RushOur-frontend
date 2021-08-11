import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleLogin = () => {
    fetch('http://10.58.2.67:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.TOKEN) {
          localStorage.setItem('token', response.token);
          this.props.history.push('/main');
        } else {
          alert('아이디와 비밀번호를 다시 확인해주세요.');
        }
      });
  };

  goToSignUp = () => {
    this.props.history.push('/SignUp');
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
                type="text"
                placeholder="아이디"
                class="username"
                name="username"
              />
              <input
                onChange={this.handleInput}
                type="password"
                placeholder="비밀번호"
                class="password"
                name="password"
              />
            </form>
            <div class="loginSave">
              <input type="checkbox" id="checkbox" name="checkbox" />
              <label for="checkbox">
                <p>아이디저장</p>
              </label>
            </div>
            <button class="loginBtn" onClick={this.handleLogin}>
              <span>로그인</span>
            </button>
            <button class="signUpBtn" onClick={this.goToSignUp}>
              회원가입
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
