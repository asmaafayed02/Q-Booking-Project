import React, { Component } from 'react';
import MedicalSlider from './MedicalSlider'
import MedicalInfo from './MedicalInfo'

class SingleMedicalPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <MedicalSlider />
                <MedicalInfo/>
            </div>
         );
    }
}
 
export default SingleMedicalPage;