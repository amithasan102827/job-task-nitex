import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner-1.jpg'
import banner2 from '../../images/banner-2.jpg';
import icon from '../../images/icon.png';
import icon1 from '../../images/icon-1.png';
import spe1 from '../../images/Rectangle 10.png';
import spe2 from '../../images/Rectangle 11.png';
import spe3 from '../../images/Rectangle 12.png';
import spe4 from '../../images/Rectangle 13.png';
import tren1 from '../../images/trending-1.png';
import tren2 from '../../images/trending-2.png';
import tren3 from '../../images/trending-3.png';
import tren4 from '../../images/trending-4.png';
import tren5 from '../../images/trending-5.png';
import tren6 from '../../images/trending-6.png';
import tren7 from '../../images/trending-7.png';
import tren8 from '../../images/trending-8.png';
import consultent from '../../images/consultent.png';
import client from '../../images/client.png';


import './Home.css';
import Slider from 'react-slick';

const Home = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3500,
        autoplaySpeed: 4500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            {/* banner */}
            <Carousel slide={false}>
                <Carousel.Item>
                    <img className='img-fluid w-100' src={banner1} alt="" srcSet="" />
                    <Carousel.Caption>
                        <h3 className='title'>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-fluid w-100' src={banner2} alt="" srcSet="" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-fluid w-100' src={banner1} alt="" srcSet="" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* why-choose-us */}
            <section className='col-lg-10 col-xxl-9 col-11 mx-auto py-5'>
                <h2 className='text-center'>Why Choose Us</h2>
                <div className='row g-4 justify-content-center py-5 px-2 '>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='p-4 border choose-card mb-1'>
                            <img src={icon1} alt="" srcSet="" />
                            <div className='mt-4'>
                                <h5 className='fw-semibold'>Best Materials</h5>
                                <p>Nullam senectus porttitor in eget. Eget rutrum leo interdum.</p>
                            </div>
                        </div>
                    </div>
                    <div className=' col-lg-4 col-md-6 col-12 '>
                        <div className='p-4 border choose-card mb-1'>
                            <img src={icon} alt="" srcSet="" />
                            <div className='mt-4'>
                                <h5 className='fw-semibold'>Best Materials</h5>
                                <p>Nullam senectus porttitor in eget. Eget rutrum leo interdum.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='p-4 border choose-card mb-1'>
                            <img src={icon} alt="" srcSet="" />
                            <div className='mt-4'>
                                <h5 className='fw-semibold'>Best Materials</h5>
                                <p>Nullam senectus porttitor in eget. Eget rutrum leo interdum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT  */}
            <section className="about-section overflow-hidden my-5 bg-info">
                <div className="about-text-container d-flex align-items-center">
                    <div className="col-lg-10 col-11 mx-auto about-text">
                        <h1>ABOUT</h1>
                        <p className="my-5">Creative Vision General Trading LLC is established in 2010 in UAE. We are one of the
                            best
                            manufacturers and suppliers of Curtains & Blinds, Wallpaper & Flooring in UAE and Qatar. Creative
                            Vision now become the preferred supplier in almost every part of UAE and QATAR, Always ensuring the
                            satisfaction of customers and providing them beyond expectation. No matter whether you visit our
                            outlet or contact us online, Our Team is happy to take free measurements and deliver the items as
                            the earliest. We Supply & Manufacture for Almost every part of UAE and QATAR</p>
                        <button type="button" className="btn know-more-btn ">KNOW MORE</button>
                    </div>
                </div>
            </section>


            {/* WE SPECIALIZE IN */}
            <section className="specialize-section mb-5">
                <div className="container specialize-container">
                    <h2 className="text-center mb-5">We Specialize in</h2>
                    <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 g-4">
                        <div className="col">
                            <a href="#" className=" stretched-link text-decoration-none">
                                <div className=" specialize-card">
                                    <img src={spe1} className="img-fluid card-img-top" alt="..." srcSet='' />
                                    <div className="card-body">
                                        <h6 className="mt-3 text-center text-light  text-truncate">BLINDS</h6>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className=" stretched-link text-decoration-none">
                                <div className=" specialize-card">
                                    <img src={spe2} className="img-fluid card-img-top" alt="..." srcSet='' />
                                    <div className="card-body">
                                        <h6 className="mt-3 text-center text-light  text-truncate">SPC FLOORING </h6>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className=" stretched-link text-decoration-none">
                                <div className=" specialize-card">
                                    <img src={spe3} className="img-fluid card-img-top" alt="..." srcSet='' />
                                    <div className="card-body">
                                        <h6 className="mt-3 text-center text-light text-truncate">CURTAINS</h6>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href="#" className=" stretched-link text-decoration-none">
                                <div className=" specialize-card">
                                    <img src={spe4} className="img-fluid card-img-top" alt="..." srcSet='' />
                                    <div className="card-body">
                                        <h6 className="mt-3 text-center text-light text-truncate">CARPET FLOORING</h6>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Remarkable Features */}
            <section className="remarkable-features ">
                <div className="container">
                    <h2 className="text-center py-5">Remarkable Features</h2>
                    <div className="row row-cols-1 row-cols-md-2 g-md-0 g-4 ">
                        <div className="col my-4">
                            <div className="d-flex justify-content-center align-items-center col-lg-10 col-12 mx-auto">
                                <div className="d-flex vertical-line" style={{ height: '77px', width: '2px' }}>
                                    <div className="vr"> </div>
                                </div>
                                <div className="ms-3 w-75">
                                    <p className="m-0 features-text">Our roller and roman blinds are available in distinctive
                                        colours, textures,
                                        and
                                        eye-catching designs.Our roller and roman blinds are available in distinctive colours,
                                        textures,
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col my-4">
                            <div className="d-flex justify-content-center align-items-center col-lg-10 col-12 mx-auto">
                                <div className="d-flex vertical-line" style={{ height: '77px', width: '2px' }}>
                                    <div className="vr "> </div>
                                </div>
                                <div className="ms-3 w-75">
                                    <p className="m-0 features-text">Our roller and roman blinds are available in distinctive
                                        colours, textures,
                                        and
                                        eye-catching designs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col my-4">
                            <div className="d-flex justify-content-center align-items-center col-lg-10 col-12 mx-auto">
                                <div className="d-flex vertical-line" style={{ height: '77px', width: '2px' }}>
                                    <div className="vr "> </div>
                                </div>
                                <div className="ms-3 w-75">
                                    <p className="m-0 features-text">Our roller and roman blinds are available in distinctive
                                        colours, textures,
                                        and
                                        eye-catching designs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col my-4">
                            <div className="d-flex justify-content-center align-items-center col-lg-10 col-12 mx-auto">
                                <div className="d-flex vertical-line" style={{ height: '77px', width: '2px' }}>
                                    <div className="vr "> </div>
                                </div>
                                <div className="ms-3 w-75">
                                    <p className="m-0 features-text">Our roller and roman blinds are available in distinctive
                                        colours, textures,
                                        and
                                        eye-catching designs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col my-4">
                            <div className="d-flex justify-content-center align-items-center col-lg-10 col-12 mx-auto">
                                <div className="d-flex vertical-line" style={{ height: '77px', width: '2px' }}>
                                    <div className="vr "> </div>
                                </div>
                                <div className="ms-3 w-75">
                                    <p className="m-0 features-text">Our roller and roman blinds are available in distinctive
                                        colours, textures,
                                        and
                                        eye-catching designs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col my-4">
                            <div className="d-flex justify-content-center align-items-center col-lg-10 col-12 mx-auto">
                                <div className="d-flex vertical-line" style={{ height: '77px', width: '2px' }}>
                                    <div className="vr"> </div>
                                </div>
                                <div className="ms-3 w-75">
                                    <p className="m-0 features-text">Our roller and roman blinds are available in distinctive
                                        colours, textures,
                                        and
                                        eye-catching designs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col my-4">
                            <div className="d-flex justify-content-center align-items-center col-lg-10 col-12 mx-auto">
                                <div className="d-flex vertical-line" style={{ height: '77px', width: '2px' }}>
                                    <div className="vr "> </div>
                                </div>
                                <div className="ms-3 w-75">
                                    <p className="m-0 features-text">Our roller and roman blinds are available in distinctive
                                        colours, textures,
                                        and
                                        eye-catching designs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col my-4">
                            <div className="d-flex justify-content-center align-items-center col-lg-10 col-12 mx-auto">
                                <div className="d-flex vertical-line" style={{ height: '77px', width: '2px' }}>
                                    <div className="vr "> </div>
                                </div>
                                <div className="ms-3 w-75">
                                    <p className="m-0 features-text">Our roller and roman blinds are available in distinctive
                                        colours, textures,
                                        and
                                        eye-catching designs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRENDING NOWADAYS */}
            <section className="trending-section pb-5 mb-5">
                <div className="container">
                    <h2 className="text-light text-center py-5">TRENDING NOWADAYS</h2>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-md-0 g-4 ">
                        <div className="col mb-md-5 mb-0">
                            <a href="#" className=" stretched-link text-decoration-none">
                                <div className="trending-card text-center">
                                    <img src={tren1} className="mb-0 img-fluid " alt="..." />
                                    <div>
                                        <h5 className="text-light">Carpet</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col mb-md-5 mb-0mb-5">
                            <div className="trending-card text-center">
                                <img src={tren2} className="mb-0 img-fluid " alt="..." />
                                <div>
                                    <h5 className="text-light">Carpet</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-md-5 mb-0">
                            <div className="trending-card text-center">
                                <img src={tren8} className="mb-0 img-fluid " alt="..." />
                                <div>
                                    <h5 className="text-light">Carpet</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-md-5 mb-0">
                            <div className="trending-card text-center">
                                <img src={tren3} className="mb-0 img-fluid " alt="..." />
                                <div>
                                    <h5 className="text-light">Carpet</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-md-5 mb-0">
                            <div className="trending-card text-center">
                                <img src={tren4} className="mb-0 img-fluid " alt="..." />
                                <div>
                                    <h5 className="text-light">Carpet</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-md-5 mb-0">
                            <div className="trending-card text-center">
                                <img src={tren5} className="mb-0 img-fluid " alt="..." />
                                <div>
                                    <h5 className="text-light">Carpet</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-md-5 mb-0">
                            <div className="trending-card text-center">
                                <img src={tren6} className="mb-0 img-fluid " alt="..." />
                                <div>
                                    <h5 className="text-light">Carpet</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-md-5 mb-0">
                            <div className="trending-card text-center">
                                <img src={tren7} className="mb-0 img-fluid " alt="..." />
                                <div>
                                    <h5 className="text-light">Carpet</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-5">
                        <button type="button" className="btn show-more-btn  mx-auto d-block px-4 py-2">SHOW MORE</button>
                    </div>
                </div>
            </section>

            {/* BOOK FREE CONSULTATION */}
            <section className="mb-5 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div>
                                <h5>Versatility In Designs & Types of</h5>
                                <h2>Roller Blinds UAE</h2>
                                <hr />
                                <p className="consaltation-text">
                                    Our roller blinds can amplify the interior of any space within the blink of an eye. Because
                                    we
                                    are offering our versatile blinds with ergonomic designs, innovative styles, and bold
                                    textured
                                    patterns at an economical price tag that provides great value and ranks top among all other
                                    types of blinds Dubai.

                                    Whatever your demand for blinds, whether it’s PVC roller blinds, zebra blinds, triple shade
                                    blinds, sheer blinds, or custom shades, we are the only perfect match in terms of
                                    affordability
                                    and quality standards.

                                    Moreover, our entire list of blinds also comes with additional customization options with a
                                    range of distinct sizes, styles, layouts, and textures. There are endless options to choose
                                    from
                                    when it comes to the colours, designs, and prints of these blinds to suit your decor.

                                    Because we offer all the inexpensive and enchanting roller blinds available in Sharjah, Abu
                                    Dhabi, UAE, with market competitive prices to our clients with 100% guaranteed quality. We
                                    believe that customer feedback is the only key to success that keeps us motivated, so don’t
                                    forget to provide your valuable feedback for our services.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-12 d-flex justify-content-md-end justify-content-center consaltation-ima-container">
                            <img src={consultent} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <h3 className="text-center py-5">BOOK FREE CONSULTATION</h3>
                </div>
            </section>

            {/* APPOINTMENT */}
            <section className="appointment-section  mb-5 d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
                            <p className=" appointment-text">Creative Vision offers you a free Home
                                Consultation, we have locally based consultants who carry our shop to your home. Our consultants
                                are highly trained & professionals who can take care of your requirements & make your dream come
                                true. They listen very carefully to your likes and visions regarding the decoration of your
                                space and advise the best economical solution. </p>
                        </div>
                        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
                            <div>
                                <h1 className="text-light appointment-text-2">Need a free <br />
                                    <span className="fw-bold">appointment</span>
                                </h1>
                                <button type="button" className="btn appointment-btn px-5 text-light mt-4">BOOK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* What our clients say about us. */}
            <section className="mb-5">
                <div className="container">
                    <h2 className="text-center py-5 client-say-title">What our clients say about us.</h2>

                    <Slider {...settings} className=' py-3 overflow-hidden px-3'>
                        <div className=''>
                            <div className="card client-card ">
                                <img src={client} className="card-img-top p-4" alt="..." />
                                <div className="card-body">
                                    <h5 className="text-center">James Pattinson</h5>
                                    <div className="text-center  my-3 star-icon">
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                    </div>
                                    <p className="card-text">“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.”.</p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className="card client-card ">
                                <img src={client} className="card-img-top p-4" alt="..." />
                                <div className="card-body">
                                    <h5 className="text-center">James Pattinson</h5>
                                    <div className="text-center  my-3 star-icon">
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                    </div>
                                    <p className="card-text">“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.”.</p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className="card client-card ">
                                <img src={client} className="card-img-top p-4" alt="..." />
                                <div className="card-body">
                                    <h5 className="text-center">James Pattinson</h5>
                                    <div className="text-center  my-3 star-icon">
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                    </div>
                                    <p className="card-text">“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.”.</p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className="card client-card ">
                                <img src={client} className="card-img-top p-4" alt="..." />
                                <div className="card-body">
                                    <h5 className="text-center">James Pattinson</h5>
                                    <div className="text-center  my-3 star-icon">
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                    </div>
                                    <p className="card-text">“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.”.</p>
                                </div>
                            </div>
                        </div>
                    </Slider>


                    <button type="button" className="btn see-more-btn  my-5  d-block mx-auto">See More</button>
                </div>
            </section>


        </>
    )
}

export default Home