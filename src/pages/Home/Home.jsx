import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner-1.jpg'
import banner2 from '../../images/banner-2.jpg';

import './Home.css';

const Home = () => {
    return (
        <>
            {/* banner */}
            <Carousel slide={false}>
                <Carousel.Item>
                    <img className='img-fluid w-100' src={banner1} alt="" srcset="" />
                    <Carousel.Caption>
                        <h3 className='title'>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img className='img-fluid w-100' src={banner2} alt="" srcset="" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img className='img-fluid w-100' src={banner1} alt="" srcset="" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    )
}

export default Home