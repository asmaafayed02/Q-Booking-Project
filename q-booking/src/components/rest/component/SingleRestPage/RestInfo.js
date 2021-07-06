import React, { Component } from 'react';
import './RestInfo.css';
import {Link} from 'react-router-dom'
class RestInfo extends Component {
    state = {  }

    
    render() { 
        return ( 
            <div className='container' >
                <div className='restInfo'>
                    <h3>Pizza hut</h3>
                    <h5><i className= "fas fa-map-marker-alt location" ></i> Abbas Elakad - Nasr City </h5>
                    <p>lorem ipsum dolor sit amet, ea doming until epicuri iudicabit name, te usu virtute placeratpurto brute disputando cu est ea doming until epicuri iudicabit name, te usu virtute placeratpurto brute disputando cu est
                    lorem ipsum dolor sit amet, ea doming until epicuri iudicabit name, te usu virtute placeratpurto brute disputando cu est ea doming</p>
                    
                    <div className='icons'>
                        <i className='fab fa-facebook-f facebook'></i>
                        <i className='fab fa-instagram'></i>
                    </div>

                    <div className='comment'>
                        <h5>Have you any comment!</h5>
                        <input id='review' type='text' placeholder='Add Any Comment Or Reveiw' />
                        <button className='add-review'>Submit</button>
                    </div>
                    
                    <div className='signUp-button'>
                        <Link to='login' className='reg-button' >Register Now!</Link>
                    </div>

                </div>
                
            </div>
         );
    }
}
 
export default RestInfo;