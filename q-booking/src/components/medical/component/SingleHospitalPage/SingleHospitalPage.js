import React, { Component } from 'react';
import HospitalSlider from './HospitalSlider'
import HospitalInfo from './HospitalInfo'

class SingleMedicalPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <HospitalSlider />
                <HospitalInfo />
            </div>
         );
    }
}
 
export default SingleMedicalPage;