import React, { Component } from 'react';
import './App.css';
import Success from './Components/Success';

const inputButtonStyle = {
  margin: '5px'
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      emailInputValue: '',
      passwordInputValue: '',
      credenciales: {},
      showSuccess: false
    };
    
    this.updateEmailInputValue = this.updateEmailInputValue.bind(this);
    this.updatePasswordInputValue = this.updatePasswordInputValue.bind(this);
  }

  updateEmailInputValue(e) {
    this.setState({
      emailInputValue: e.target.value
    })
  }

  updatePasswordInputValue(e) {
    this.setState({
      passwordInputValue: e.target.value
    })
  } 

  onSignIn() {
    const id = () => Number(Math.random().toString().substr(2,5));

    if (this.state.emailInputValue !== "" && this.state.passwordInputValue !== "") {
      this.setState({
        showSuccess: !this.state.showSuccess, 
        credenciales: Object.assign(this.state.credenciales, {id:  id(), user: this.state.emailInputValue, userPassword: this.state.passwordInputValue})
      });
    }; 

    //const userName = this.state.emailInputValue.slice(0, this.state.emailInputValue.indexOf("@"));
    
    console.log('credentiales: ', this.state);
  } 

  render() {

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <form>
          <input type="text" id="useremail" placeholder="Email Address..." value={this.state.emailInputValue} onChange={this.updateEmailInputValue} style={inputButtonStyle} />
          <br/>
          <input type="password" id="password" placeholder="Password..." value={this.state.passwordInputValue} onChange={this.updatePasswordInputValue} style={inputButtonStyle} />
          <br/>
          <button id="button" type="button" className="btn btn-primary" onClick={ () => {this.onSignIn()} }>Sign In</button>
        </form>
        {this.state.showSuccess && <Success />}
      </div> 
    );
  }
}

export default App;
