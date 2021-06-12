import React from 'react'


import './css/bootstrap.min.css';
import './css/animate.min.css';
import './css/magnific-popup.css';
import './css/fontawesome-all.min.css';
import './css/flaticon.css';
import './css/aos.css';
//import './css/owl.carousel.min.css';
import './css/meanmenu.css';
import './css/slick.css';
import './css/custom-animation.css';
import './css/default.css';
import './css/style.css';
import './css/responsive.css';
import  footerBg from  "./img/bg/footer_bg.jpg"

import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div>
            {/* preloader *
            <div id="preloader">
                <div id="loading-center">
                    <div id="loading-center-absolute">
                        <div className="object" id="object_one" />
                        <div className="object" id="object_two" />
                        <div className="object" id="object_three" />
                    </div>
                </div>
            </div>
            {/* preloader-end */}
            {/* header */}
            <header className="transparent-header">
                <div id="header-sticky" className="header-wrap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="logo">
                            <a href="/"> IEMIS</a>
                            </div>
                        </div>
                        <div className="col-lg-9 text-right d-none d-lg-block">
                            <div className="menu-area d-inline-block">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li className="active"><Link to="/">Home</Link></li>
                                            <li><Link to="/about">About</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="header-btn d-none d-xl-inline-block">
                                <Link to="/auth/school/signin" className="btn"><i className="fas fa-lock" /> School</Link>
                            </div>
                            <div className="header-btn d-none d-xl-inline-block">
                                <Link to="/auth/district/signin" className="btn"><i className="fas fa-lock" /> District</Link>
                            </div>
                            <div className="header-btn d-none d-xl-inline-block">
                                <Link to="/auth/admin/signin" className="btn"><i className="fas fa-lock" /> Admin</Link>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mobile-menu" />
                        </div>
                    </div>
                </div>
                </div>
            </header>
            {/* header-end */}

            {/* main-area */}
            <main>
                {/* slider-area */}
                    <section className="slider-area slider-bg" data-background="img/slider/slider_bg.jpg">
                    <div className="container">
                    <div className="slider-overflow">
                        <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="slider-content mt-15">
                            <h2 className="wow slideInLeft" data-wow-delay="0.2s">Why IEMIS?</h2>
                            <p className="wow slideInLeft" data-wow-delay="0.4s">Strengthening of Education Management Information System (EMIS) has been the focus of International Development Partners (IDPs) over the years, 
while developed countries leverage on proprietary School Management Software (SMS) solutions such as Alma, Class365, Edsby, Eduflex, Edvance etc. in managing their education data, 
these solutions are expensive and unsuitable for developing countries whose annual education budget still fall below international benchmark.
Today, countries are without EMIS and those with EMIS are yet to advance from desktop solutions to a web platform for efficient coverage and handling of education data.</p>
                            <a href="fake" className="btn wow slideInLeft" data-wow-delay="0.6s">more....</a>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 d-none d-lg-block">
                            <div className="slider-img animate-slider-img position-relative ml-50">
                            <img src="img/slider/slider_img01.png" alt="img" className="slider-main-img" />
                            <img src="img/slider/board_img.png" alt="img" className="wow slideInDown" data-wow-delay="0.6s" />
                            <img src="img/slider/man_img.png" alt="img" className="wow slideInLeftS" data-wow-delay="1s" />
                            <div className="img-nth-four wow slideInLeftS" data-wow-delay="1.4s"><img src="img/slider/cog_img1.png" alt="img" className="rotateme" /></div>
                            <div className="img-nth-five wow slideInRight" data-wow-delay="1.8s"><img src="img/slider/cog_img2.png" alt="img" className="rotateme" /></div>
                            <img src="img/slider/cog_img3.png" alt="img" className="wow slideInLeftS" data-wow-delay="2.2s" />
                            <img src="img/slider/cog_img4.png" alt="img" className="wow fadeInUp" data-wow-delay="2.6s" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="slider-shape s-shape-one"><img src="img/shape/slider_shape01.png" alt="img" /></div>
                    <div className="slider-shape s-shape-two"><img src="img/shape/slider_shape03.png" alt="img" /></div>
                    <div className="slider-shape s-shape-three"><img src="img/shape/slider_shape02.png" alt="img" /></div>
                    <div className="slider-shape s-shape-four"><img src="img/shape/slider_shape04.png" alt="img" /></div>
                    <div className="slider-shape s-shape-five"><img src="img/shape/slider_shape05.png" alt="img" /></div>
                    <div className="slider-shape s-shape-six"><img src="img/shape/slider_shape06.png" alt="img" /></div>
                </section>
                {/* slider-area-end */}
            </main>
            {/* main-area-end */}

            {/* footer */}
            <footer>
            <div className="footer-wrap pt-85 pb-40" data-background={footerBg}>
                <div className="container">
                <div className="footer-newsletter pb-65">
                    <div className="row align-items-center">
                    <div className="col-lg-3">
                        <div className="footer-logo">
                        <a href="index.html" ><img src="img/logo/w_logo.png" alt="img" /></a>
                        </div>
                    </div>
                    <div className="col-lg-9 newsletter-flex text-left text-md-right">
                        <div className="f-newsletter-content d-inline-block">
                        <p><i className="fas fa-arrow-right" /> SUBSCRIBE TO OUR NEWSLETTER</p>
                        </div>
                        <div className="f-newsletter-form d-block d-md-inline-block">
                        <form action="#">
                            <input type="email" placeholder="Type your email here" />
                            <button><i className="fas fa-paper-plane" /></button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="footer-widget mb-50">
                        <div className="footer-text">
                        <p>Orem Ipsum is simply dumm text the printing and types indstr sum has been the industry</p>
                        </div>
                        <div className="footer-social">
                        <ul>
                            <li><a href="fake"><i className="fab fa-facebook-f" /></a></li>
                            <li><a href="fake"><i className="fab fa-twitter" /></a></li>
                            <li><a href="fake"><i className="fab fa-pinterest-p" /></a></li>
                            <li><a href="fake"><i className="fab fa-linkedin-in" /></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="footer-widget mb-50">
                        <div className="fw-title mb-30">
                        <h5>RECENT POSTS</h5>
                        </div>
                        <div className="f-rc-post">
                        <ul>
                            <li>
                            <div className="f-rc-thumb">
                                <a href="fake"><img src="img/blog/f_rc_img01.jpg" alt="img" /></a>
                            </div>
                            <div className="f-rc-content">
                                <span>19 Jun, 2019</span>
                                <h5><a href="fake">which the syste built and actually</a></h5>
                            </div>
                            </li>
                            <li>
                            <div className="f-rc-thumb">
                                <a href="fake"><img src="img/blog/f_rc_img02.jpg" alt="img" /></a>
                            </div>
                            <div className="f-rc-content">
                                <span>19 Jun, 2019</span>
                                <h5><a href="fake">which the syste built and actually</a></h5>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="footer-widget mb-50">
                        <div className="fw-title mb-30">
                        <h5>USEFUL LINKS</h5>
                        </div>
                        <div className="fw-link">
                        <ul>
                            <li><a href="fake"><i className="fas fa-caret-right" /> About us</a></li>
                            <li><a href="fake"><i className="fas fa-caret-right" /> Delivery Information</a></li>
                            <li><a href="fake"><i className="fas fa-caret-right" /> Terms &amp; Conditions</a></li>
                            <li><a href="fake"><i className="fas fa-caret-right" /> Privacy Policy</a></li>
                            <li><a href="fake"><i className="fas fa-caret-right" /> Donation</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="footer-widget mb-50">
                        <div className="fw-title mb-30">
                        <h5>Support &amp; Downloads</h5>
                        </div>
                        <div className="f-support-content">
                        <p>Lorem ipsum dolor sit amet, consy eetur adipisc de elit. Quisque act raqum nunc no dolor</p>
                        <a href="fake" className="f-download-btn"><img src="img/images/f_download_btn01.png" alt="img" /></a>
                        <a href="fake" className="f-download-btn"><img src="img/images/f_download_btn02.png" alt="img" /></a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-7">
                    <div className="copyright-text">
                        <p>Copyright 2021 © <span>iemis </span> | All Rights Reserved</p>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-5">
                    <div className="f-payment-method text-center text-md-right">
                        <img src="img/images/card_img.png" alt="img" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </footer>
            {/* footer-end */}
        </div>
    )
}
