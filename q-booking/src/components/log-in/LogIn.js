import React, { Component } from 'react';
import'./LogIn.css'
import {Link} from 'react-router-dom'

class LogIn extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='container'>
                <form className='logIn '>
                    <div className='logIn-border col-12'>
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
                                <Link to='/sign'>Sign In</Link>
                            </p>
                            
                            <button className='form-button'>Log in</button>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default LogIn;