import React from 'react';
import './login.css'

class Login extends React.Component{
    render(){
        return(
            <div class="login-screen">
                <div class="left-item">
                    <div class="login-panel">
                        <div class="inner-login-panel">
                            <div class="content-panel">
                            <h3 class="title">Sign In</h3>
                            <form>
                                <input
                                    type="text" 
                                    placeholder="USERNAME" 
                                    name="username"
                                    onChange={this.props.change}
                                />
                                <input 
                                    type="password" 
                                    placeholder="PASSWORD" 
                                    name="password"
                                    onChange={this.props.change}
                                />
                                <button type="button" onClick={this.props.login}>Submit</button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="right-item">
                    <div class="slider-panel">
                        <div class="inner-slider-panel">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login