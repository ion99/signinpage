import React, { Component } from 'react';
import './App.css';

const inputButtonStyle = {
  margin: '5px'
};

const id = () => Math.floor(Math.random() * 10000);

class App extends Component {
  constructor() {
    super();
    this.state = {
      emailInputValue: '',
      passwordInputValue: '',
      credenciales: {}
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

    this.setState({ 
      credenciales: Object.assign(this.state.credenciales, {id:  id(), user: this.state.emailInputValue, userPassword: this.state.passwordInputValue})
    });

    const userName = this.state.emailInputValue.slice(0, this.state.emailInputValue.indexOf("@"));
    
    document.querySelector("form").style.display = "none";
    document.querySelector("h1").innerHTML = `Successfully Signed In ${userName}!`;
    
    console.log('credentiales: ', this.state);
  } 

  render() {

    return (
      <div className="App">
        <h1 ref="greet">Hello World!</h1>
        <form ref="signIn">
          <input type="text" id="useremail" placeholder="Email Address..." value={this.state.emailInputValue} onChange={this.updateEmailInputValue} style={inputButtonStyle} />
          <br/>
          <input type="password" id="password" placeholder="Password..." value={this.state.passwordInputValue} onChange={this.updatePasswordInputValue} style={inputButtonStyle} />
          <br/>
          <button id="button" type="button" className="btn btn-primary" onClick={ () => this.onSignIn() }>Sign In</button>
        </form>
      </div> 
    );
  }
}

export default App;
