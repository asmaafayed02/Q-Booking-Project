import React, { Component } from 'react';
import './HospitalInfo.css'
import {Link} from 'react-router-dom'
class HospitalInfo extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='container' >
                <div className='hospitalInfo'>
                    <h3>El Essawy Specialized Hospital</h3>
                    <h5><i className= "fas fa-map-marker-alt location" ></i> Abbas Elakad - Nasr City </h5>
                    <p>lorem ipsum dolor sit amet, ea doming until epicuri iudicabit name, te usu virtute placeratpurto brute disputando cu est ea doming until epicuri iudicabit name, te usu virtute placeratpurto brute disputando cu est
                    lorem ipsum dolor sit amet, ea doming until epicuri iudicabit name, te usu virtute placeratpurto brute disputando cu est ea doming</p>

                    <div className='icons'>
                        <i className='fab fa-facebook-f facebook'></i>
                        <i className='fab fa-instagram'></i>
                    </div>

                    <div className='comment'>
                        <h5>Have you any comment!</h5>
                        <input type='text' placeholder='Add Any Comment Or Reveiw' />
                        <button className='adding-review'>Submit</button>
                    </div>

                    <div className='signUp-button'>
                        <Link to='/login' className='reg-button' >Register Now!</Link>
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default HospitalInfo;