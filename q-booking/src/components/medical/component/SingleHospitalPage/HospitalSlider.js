import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class HospitalSlider extends Component {
    state = {  }
    render() { 
        return ( 
            <Carousel  >
                <Carousel.Item> { /* Start First Slises  */ }
                    <img
                    className="w-100"
                    src={'/Images/Clinic/clinic3.jpg'}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className='caption'>First slide label</h3>
                    <p className='caption'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item> { /* End First Slises  */ }

                <Carousel.Item> { /* Start Second Slises  */ }
                    <img
                    className="w-100"
                    src={'/Images/Clinic/clinic2.jpg'}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3 className='caption'>Second slide label</h3>
                    <p className='caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item> { /* End Second Slises  */ }

                <Carousel.Item> { /* Start Third Slises  */ }
                    <img
                    className="w-100"
                    src={'/Images/Clinic/female-doctor-hospital.jpg'}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 className='caption'>Third slide label</h3>
                    <p className='caption'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> { /* End Third Slises  */ }
            </Carousel>
         );
    }
}
 
export default HospitalSlider;