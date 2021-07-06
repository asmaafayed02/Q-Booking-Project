import React, { Component } from 'react';
import MedicalSlider from './ClinicSlider'
import MedicalInfo from './ClinicInfo'

class SingleClinicPage  extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <MedicalSlider />
                <MedicalInfo />
            </div>
         );
    }
}
 
export default SingleClinicPage ;