import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <Carousel slide={false} fade={false}>
                <Carousel.Item> { /* Start First Slises  */ }
                    <img
                        className="w-100"
                        src={'/ImgSlider/FirstSlide.jpg'}
                        alt="First slide"
                    />
                    <h1 id="slide-head" className=''><span>Q-</span>Booking</h1>
                    {/* <p id='slide-parag'>Your sire to choose the best place suitable for you, Best wishes</p> */}
                </Carousel.Item> { /* End First Slises  */ }

                <Carousel.Item> { /* Start Second Slises 'Menu' */ }
                    <img
                        className="w-100"
                        src={'/ImgSlider/SecondSlide.jpg'}
                        alt="Second slide"
                    />

                </Carousel.Item> { /* End Second Slises 'Menu' */ }

                <Carousel.Item> { /* Start Third Slises */ }
                    <img
                        className="w-100"
                        src={'/ImgSlider/ThirdSlide.jpg'}
                        alt="Third slide"
                    />
                </Carousel.Item> { /* End Third Slises */ }
                
            </Carousel>
         );
    }
}
 
export default Home;