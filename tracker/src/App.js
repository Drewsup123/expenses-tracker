import React, { Component } from 'react';
import AppView from './views/AppView'
import Login from './views/Login'

class App extends Component {
  constructor(){
    super();
    this.state = {
      B_LoggedIn : false,
      user : {
        username : "",
        password : ""
      }
    }
  }

  loginHandler = e => {
    if(this.state.user.username && this.state.user.password){
      this.setState({B_LoggedIn : true})
    }else{
      alert("Please include both username and password")
    }
  }

  changeHandler = e => {
    this.setState({user : {...this.state.user , [e.target.name] : e.target.value}})
    console.log(this.state.user)
  }

  render() {
    if(this.state.B_LoggedIn){
      return (
        <div className="App">
          <AppView />
        </div>
      );
    }else{
      return(<Login login={this.loginHandler} change={this.changeHandler}/>)
    }

  }
}

export default App;
