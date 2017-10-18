import React, { Component } from 'react';
import './App.css';

const inputButtonStyle = {
  margin: '5px'
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      //list: ['dog', 'cat', 'penguin', 'lion', 'wolf'],
      credenciales: {}
    };  
  }

  onSignIn() {
    const id = () => Math.floor(Math.random() * 10000);
    const email = document.getElementById("useremail").value.toLowerCase();
     
    const password = document.getElementById("password").value;

    this.setState({ 
      credenciales: Object.assign(this.state.credenciales, {id:  id(), user: email, userPassword: password})
    });

    document.getElementById("password").value = "";
    document.getElementById("useremail").value = "";
   
    document.querySelector("form").style.display = "none";
    document.querySelector("h1").innerHTML = "I am a New Page!";
    console.log('credentiales: ', this.state);
  } 

  render() {

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <form>
          <input type="text" id="useremail" placeholder="Email Address..." style={inputButtonStyle} />
          <br/>
          <input type="password" id="password" placeholder="Password..." style={inputButtonStyle} />
          <br/>
          <button id="button" type="button" className="btn btn-primary" onClick={ () => this.onSignIn() }>Sign In</button>
        </form>
      </div> 
    );
  }
}

export default App;
