// import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhoneAlt, faEnvelope, faClock, faCopyright } from '@fortawesome/free-solid-svg-icons';
import './Footer.scss';
import Logo from '../../assets/image/Logo.png';
function Footer() {
    return (
        <div className="wrapper-footer">
            <div className="grid">
                <div className="footer-up">
                    <a href="/">
                        <img src={Logo} alt="123" />
                    </a>
                    <div className="description">
                        Lorem ipsum dolor sit amet, no qui debet putant sententiae, in sumo eros ius, usu purto eius in.
                        No vix impetus graecis voluptua, sed et indoctum omittantur. Cu assum soluta fierent pri,
                    </div>
                    <div className="icon-social">
                        <FontAwesomeIcon icon={faFacebookF} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faGooglePlusG} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                </div>
                <div className="footer-down">
                    <div className="contact-us">
                        <div className="title">CONTACT US</div>

                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faLocationDot} />
                                200 Lincoln Ave, Sanlinas, CA 93901
                            </li>
                            <li>
                                <a href="tel:+84334665050">
                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                    +84334665050
                                </a>
                            </li>
                            <li>
                                <a href="mailto:gymax@example.com">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    gymax@example.com
                                </a>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faClock} /> 9:00 - 22:00 All day
                            </li>
                        </ul>
                    </div>
                    <div className="my-account">
                        <div className="title">MY ACCOUNT</div>

                        <ul>
                            <li>
                                <a href="/">My account</a>
                            </li>
                            <li>
                                <a href="/">Check out</a>
                            </li>
                            <li>
                                <a href="/">Register</a>
                            </li>
                            <li>
                                <a href="/">Login</a>
                            </li>
                        </ul>
                    </div>
                    <div className="information">
                        <div className="title">INFORMATION</div>

                        <ul>
                            <li>
                                <a href="/">About us</a>
                            </li>
                            <li>
                                <a href="/">Contact us</a>
                            </li>
                            <li>
                                <a href="/">Teams of user</a>
                            </li>
                            <li>
                                <a href="/">Privacy policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="quick-link">
                        <div className="title">QUICK LINK</div>

                        <ul>
                            <li>
                                <a href="/">New uer</a>
                            </li>
                            <li>
                                <a href="/">Help center</a>
                            </li>
                            <li>
                                <a href="/">Report spam</a>
                            </li>
                            <li>
                                <a href="/">FAQs</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-information-down-mobile" hidden>
                    <details>
                        <summary>CONTACT US</summary>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faLocationDot} /> 200 Lincoln Ave, Sanlinas, CA 93901
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhoneAlt} /> <a href="tel:+84334665050">0334665050</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <a href="mailto:gymax@example.com"> gymax@example.com</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faClock} />
                                9:00 - 22:00 All day
                            </li>
                        </ul>
                    </details>

                    <details>
                        <summary>MY ACCOUNT</summary>
                        <ul>
                            <li>
                                <a href="/">My Account</a>
                            </li>
                            <li>
                                <a href="/"> Check Out </a>
                            </li>
                            <li>
                                <a href="/">Register</a>
                            </li>
                            <li>
                                <a href="/">Login</a>
                            </li>
                        </ul>
                    </details>
                    <details>
                        <summary>INFORMATION</summary>
                        <ul>
                            <li>
                                <a href="/">About Us</a>
                            </li>
                            <li>
                                <a href="/">Contact Us </a>
                            </li>
                            <li>
                                <a href="/">Teams Of User</a>
                            </li>
                            <li>
                                <a href="/">Privacy Policy</a>
                            </li>
                        </ul>
                    </details>
                    <details>
                        <summary>QUICK LINK</summary>
                        <ul>
                            <li>
                                <a href="/">New User</a>
                            </li>
                            <li>
                                <a href="/">Help Center</a>
                            </li>
                            <li>
                                <a href="/">Report Spam</a>
                            </li>
                            <li>
                                <a href="/">FAQs</a>
                            </li>
                        </ul>
                    </details>
                </div>
            </div>
            <div className="copy-right">
                Copyright 2022 Gymax <FontAwesomeIcon icon={faCopyright} />
                Desgin by Vuxuan ArrowHiTech. All Right Resverved
            </div>
        </div>
    );
}

export default Footer;
