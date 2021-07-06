import React, { Component } from 'react';
import './sign.css'

class Sign extends Component {
    state = {  }

    matchPassword = () => {
            var pw1 = document.getElementById("pswd1");  
            var pw2 = document.getElementById("pswd2"); 
            var message =  document.getElementsByClassName('message');
            if(pw1 !== pw2)  
            {   
              message.innerText=("Passwords did not match");  
            } else {  
               message.innerText=("Password created successfully");  
            }  
        }

    render() { 
        
        return ( 
            <div className='log-in container'>
                <div className='form-heading row'>
                    <div className='col-12' >
                        <h2>Sign Up</h2>
                    
                        <div className='form'>
                        <form>
                            <fieldset className='border'>
                                <legend> <h4>Your Information</h4> </legend>
                                    <input 
                                        className='input-text f-name form-control' 
                                        id="validationDefault01"
                                        required
                                        name='First-name' 
                                        type='text' 
                                        placeholder='First Name'  
                                    />
                                    <input 
                                        className='input-text form-control' 
                                        id="validationDefault01"
                                        required
                                        name='Last-name' 
                                        type='text' 
                                        placeholder='Last Name'  
                                    />
                                    <input 
                                        className='input-text form-control' 
                                        id="validationDefault01"
                                        required
                                        name='e-mail' 
                                        type='e-mail' 
                                        placeholder='Your e-mail'  
                                    />
                                    <input 
                                        className='input-text form-control' 
                                        id="validationDefault01"
                                        required
                                        name='phone-num' 
                                        type='number' 
                                        placeholder='Your phone number' 
                                        maxLength='11' 
                                    />
                                    <input 
                                        className='input-text password form-control'
                                        id="pswd1" 
                                        required
                                        name='password' 
                                        type='password' 
                                        placeholder='Enter password'  
                                    />
                                    <input 
                                        className='input-text pass form-control ' 
                                        id="pswd2"
                                        required
                                        name='password' 
                                        type='password' 
                                        placeholder='Confirm password'  
                                    />
                                    <div className='passInfo'></div>
                                    
                                    <label>Choose Your Gender</label>
                                    <br></br> <br></br>
                                    <input 
                                        className='option' 
                                        id="validationDefault01"
                                        required
                                        name='gender' 
                                        type='radio' 
                                        value='Male' 
                                    />Male

                                    <br></br> <br></br>
                                    <input 
                                        className='option'
                                        id="validationDefault01"
                                        required
                                        name='gender'
                                        type='radio' 
                                        value='Female' 
                                    />Female
                                    
                                    <br></br> <br></br>
                                    
                                    <div className='message'></div>

                                    <button className='form-button' onClick= {this.matchPassword} >Submit</button>
                            </fieldset>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Sign;