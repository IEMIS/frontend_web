import React from 'react'
import {Carousel} from 'react-bootstrap'
import bg1 from '../img/slider/slider_bg.jpg';
import bg2 from '../img/slider/slider_bg02.png';
//import bg3 from '../img/slider/slider_bg03.png';
//import bg4 from '../img/slider/slider_bg04.jpg';
export default function Slide() {
    return (
        <Carousel >
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={bg1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={bg2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={bg2}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
