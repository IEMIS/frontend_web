import React from 'react'
import {Carousel} from 'react-bootstrap'
import bg1 from '../img/slider/slider_img03.png';
import bg2 from '../img/slider/slider_img03.png';
import bg3 from '../img/slider/slider_img03.png';
import bg4 from '../img/slider/slider_img03.png';
export default function Slide() {
    return (
        <Carousel >
            <Carousel.Item interval={4000}>
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
            <Carousel.Item interval={2000}>
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
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={bg3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={bg4}
                alt="Fourth slide"
                />
                <Carousel.Caption>
                <h3>Fourth slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
