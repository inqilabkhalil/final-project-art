import React from 'react'
import Linkcomp from '../Link/Linkcomp'
import Telegram from '../Svg/Telegram'
import Call from '../Svg/Call'
import Mail from '../Svg/Mail'
import './Footer.scss'


const Footer = () => {
    return (
        <footer>
            <div className='footer-div'>
                <section className='first-footer-section'>
                    <div className='main-footer-div large-footer-div'>
                        <h4 className='large-h4'>
                            Our  Mission
                        </h4>
                        <p className='footer-p gather-p' >
                            So seed seed green that winged cattle in. Gathering thing made fly you're no divided deep moved us lan Gathering thing us land years living.<br></br>
                            <br></br>

                        </p>
                        <p className='footer-p'>So seed seed green that winged cattle in. Gathering thing made fly you're no divided deep moved</p>
                    </div>
                    <div className='main-footer-div'>
                        <h4 className='normal-h4'>Quick Links</h4>
                        <div className='footer-link'>
                            <Linkcomp colfoot />
                        </div>
                    </div>
                    <div className='main-footer-div'>
                        <h4 className='normal-h4'>Gallery</h4>
                        <div className='footer-img'>
                            <img src="https://preview.colorlib.com/theme/aroma/img/gallery/r1.jpg" />
                            <img src="https://preview.colorlib.com/theme/aroma/img/gallery/r2.jpg" alt="" />
                            <img src="	https://preview.colorlib.com/theme/aroma/img/gallery/r3.jpg" alt="" />
                            <img src="	https://preview.colorlib.com/theme/aroma/img/gallery/r5.jpg" alt="" />
                            <img src="  	https://preview.colorlib.com/theme/aroma/img/gallery/r7.jpg" alt="" />
                            <img src="	https://preview.colorlib.com/theme/aroma/img/gallery/r8.jpg" alt="" />
                        </div>
                    </div>
                    <div className='main-footer-div links-main-footer-div'>
                        <h4 className='normal-h4 contact-normal-h4'>Contact Us</h4>
                        <div className='contact-section'>
                            <Telegram />
                            <div className='aboutCompany-div'>
                                <p className='footer-whiteP'>
                                    Head Office
                                </p>
                                <p className='contact-p'>123, Main Street, Your City</p>

                            </div>
                        </div>
                        <div className='contact-section'>
                            <Call />    
                            <div className='aboutCompany-div'>
                                <p className='footer-whiteP'>Phone Number</p>
                                <p className='contact-p'>+123 456 7890</p>
                                <p className='contact-p'>+123 456 7890</p>
                            </div>
                        </div>
                        <div className='contact-section'>
                            <Mail />
                            <div className='aboutCompany-div'>
                                <p className='footer-whiteP'>Email</p>
                                <p className='contact-p'>free@infoexample.com</p>
                                <p className='contact-p'>www.infoexample.com</p>

                            </div>
                        </div>

                    </div>
                </section>
                <section className='second-section'>
                    <p className='last-footerP'>
                        Copyright ©2025 All rights reserved This template is made with  by <a href="https://colorlib.com/">Colorlib</a>
                    </p>
                </section>
            </div>
        </footer>
    )
}

export default Footer