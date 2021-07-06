import React, { Component } from 'react';
import'./LogIn.css'

class LogIn extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='container'>
                <form className='logIn'>
                    <div className='logIn-border'>
                        <legend> <h4>Login Into Our Website</h4> </legend>
                            <input 
                                className='input-text f-name form-control' 
                                id="validationDefault01"
                                required
                                name='User name' 
                                type='e-mail' 
                                placeholder='Enter your User name'  
                            />
                            <br /> 
                            <input 
                                className='input-text form-control' 
                                id="validationDefault01"
                                required
                                name='password' 
                                type='password' 
                                placeholder='Enter your password'  
                            />
                            <p>If you don't have account in Q-Booking   ,  
                                <a href='./sign/sign.js'>Sign In</a>
                            </p>
                            
                            <button className='form-button'>Log in</button>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default LogIn;