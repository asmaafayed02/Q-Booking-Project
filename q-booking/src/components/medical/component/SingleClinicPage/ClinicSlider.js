import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class ClinicSlider extends Component {
    state = {  }
    render() { 
        return ( 
            <Carousel  >
                <Carousel.Item> { /* Start First Slises  */ }
                    <img
                    className="w-100"
                    src={'/ImgClinic/clinic1.jpg'}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item> { /* End First Slises  */ }

                <Carousel.Item> { /* Start Second Slises  */ }
                    <img
                    className="w-100"
                    src={'/ImgClinic/clinic2.jpg'}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item> { /* End Second Slises  */ }

                <Carousel.Item> { /* Start Third Slises  */ }
                    <img
                    className="w-100"
                    src={'/ImgClinic/clinic3.jpg'}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> { /* End Third Slises  */ }
            </Carousel>
         );
    }
}
 
export default ClinicSlider;