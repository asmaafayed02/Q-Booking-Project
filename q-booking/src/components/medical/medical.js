import React, { Component } from 'react';
import { Clinics } from './component/clinic/clinins';
import { Hospitals } from './component/hospital/hospitals';
class Medical extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Hospitals/>
                <Clinics/>
            </div>
         );
    }
}
 
export default Medical;