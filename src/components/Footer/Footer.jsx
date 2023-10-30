import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer-container d-flex align-items-center justify-content-center py-md-0 py-5">
            <div className="container">
                <div className="row ">
                    <div className="col-md-4 col-12  d-flex justify-content-center">
                        <div className=" quick-links text-md-start text-center">
                            <h5 className="text-light mb-4">Quick Links</h5>
                            <h6><a href="">Home</a></h6>
                            <h6><a href="">About</a></h6>
                            <h6><a href="">Contact Us</a></h6>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 d-flex justify-content-center mt-md-0 mt-5">
                        <div className=" quick-links text-md-start text-center">
                            <h5 className="text-light mb-4">Product</h5>
                            <h6><a href="">Blinds & Shades</a></h6>
                            <h6><a href="">Curtains</a></h6>
                            <h6><a href="">SPC Flooring</a></h6>
                            <h6><a href="">Wallpaper</a></h6>
                            <h6><a href="">Moatorized Blinds and Curtains</a></h6>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 d-flex justify-content-center">
                        <div className=" quick-links text-light text-md-start text-center mt-md-0 mt-5">
                            <h5 className="text-light text-md-end text-center">Follow Us</h5>
                            <div className="my-4 d-flex justify-content-end footer-icon">
                                <a className="me-4" href=""> <i className="fa-brands fa-square-facebook fa-2x"></i></a>
                                <a href=""> <i className="fa-brands fa-square-twitter fa-2x"></i> </a>
                            </div>
                            <div className="footer-icon">
                                <a href=""><i className="fa-brands fa-linkedin fa-2x"></i></a>
                                <a href=""> <i className="fa-brands fa-youtube mx-4 fa-2x"></i></a>
                                <a href=""> <i className="fa-brands fa-pinterest fa-2x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer