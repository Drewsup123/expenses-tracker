import React, { Component } from 'react';
import AppView from './views/AppView'
import Login from './views/Login'

class App extends Component {
  constructor(){
    super();
    this.state = {
      B_LoggedIn : false
    }
  }

  render() {
    if(this.state.B_LoggedIn){
      return (
        <div className="App">
          <AppView />
        </div>
      );
    }else{
      return(<Login />)
    }

  }
}

export default App;
