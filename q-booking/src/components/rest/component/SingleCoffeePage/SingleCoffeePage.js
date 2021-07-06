import React, { Component } from 'react';
import CoffeeSlider from './CoffeeSlider'
import CoffeeInfo from './CoffeeInfo'

class SingleCoffeePage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <CoffeeSlider />
                <CoffeeInfo />
            </div>
         );
    }
}
 
export default SingleCoffeePage;