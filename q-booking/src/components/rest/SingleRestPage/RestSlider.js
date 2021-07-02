import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class RestSlider extends Component {
    state = { }
    render() { 
        return ( 
            <Carousel >
                <Carousel.Item> { /* Start First Slises  */ }
                    <img
                        className="w-100"
                        src={'/ImgResturant/resturant1.jpg'}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item> { /* End First Slises  */ }

                <Carousel.Item> { /* Start Second Slises 'Menu' */ }
                    <img
                        className="w-100"
                        src={'/ImgResturant/Chicken.jpg'}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item> { /* End Second Slises 'Menu' */ }

                <Carousel.Item> { /* Start Third Slises */ }
                    <img
                        className="w-100"
                        src={'/ImgResturant/Pizza.jpeg'}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> { /* End Third Slises */ }
            </Carousel>
         );
    }
}
 
export default RestSlider;