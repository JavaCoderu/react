import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import sity1IMG1 from '../assets/sity1.jpg'
import sity1IMG2 from '../assets/sity2.jpg'
import sity1IMG3 from '../assets/sity3.jpg'
import sity1IMG4 from '../assets/sity4.jpg'

export default class  CarouselBox extends Component{
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={sity1IMG1}
                        alt="Sity"
                    />
                    <Carousel.Caption>
                        <h3>Sity</h3>
                        <p>Loren ipsum dolor!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={sity1IMG2}
                        alt="Sity"
                    />
                    <Carousel.Caption>
                        <h3>Sity</h3>
                        <p>Loren ipsum dolor!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={sity1IMG3}
                        alt="Sity"
                    />
                    <Carousel.Caption>
                        <h3>Sity</h3>
                        <p>Loren ipsum dolor!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={sity1IMG4}
                        alt="Sity"
                    />
                    <Carousel.Caption>
                        <h3>Sity</h3>
                        <p>Loren ipsum dolor!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}