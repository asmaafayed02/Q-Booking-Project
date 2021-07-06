import React, { Component } from 'react';
import RestSlider from './RestSlider'
import RestInfo from './RestInfo'

class SingleResPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <RestSlider />
                <RestInfo />
            </div>
         );
    }
}
 
export default SingleResPage;