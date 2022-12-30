import React, { Component } from 'react';
import { faSearch, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';
import LogoCodeGym from '../../assets/image/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="wrapper">
                <div className="grid">
                    <header>
                        <div className="header">
                            <div className="img-logo">
                                <a href="/">
                                    <img src={LogoCodeGym} alt="123" />
                                </a>
                            </div>

                            <ul className="header-nav-list">
                                <li className="header-nav-link">
                                    <a href="/">Home</a>
                                </li>
                                <li className="header-nav-link">
                                    <a href="/">Pages</a>
                                </li>
                                <li className="header-nav-link">
                                    <a href="/">Classes</a>
                                </li>
                                <li className="header-nav-link">
                                    <a href="/">Portfolio</a>
                                </li>
                                <li className="header-nav-link">
                                    <a href="/">Blog</a>
                                </li>
                                <li className="header-nav-link">
                                    <a href="/">Contacts</a>
                                </li>
                            </ul>
                            <div className="header-nav-icons">
                                <FontAwesomeIcon icon={faSearch} className="icon-search" />
                                <FontAwesomeIcon icon={faCartShopping} className="icon-cart" />
                                <FontAwesomeIcon icon={faUser} className="icon-user" />
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        );
    }
}
export default Header;
