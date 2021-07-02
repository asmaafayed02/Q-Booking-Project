import React, { Component } from 'react';
import IndividualFounder from './IndividualFounder'
import './About.css'

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='about'>
                <h1 className='about-heading'>What About US</h1>
                <p className='about-parag'>This site is absolutely one of the best sites through which it is possible to know the Redturants, Coffee shop, Pharmacy, Hospitals, and Clinics that is near you
                <br />
                 <span className='para-color'>and The Founders are:</span>  
                 </p>
                <IndividualFounder />
                </div>

         );
    }
}
 
export default About;