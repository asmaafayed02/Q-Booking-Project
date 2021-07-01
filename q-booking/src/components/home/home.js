import React, { Component } from 'react';
import Slider from './Slider/Slider';
import About from './About/About'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Slider />
                <About /> 
            </div>
         );
    }
}
 
export default Home;