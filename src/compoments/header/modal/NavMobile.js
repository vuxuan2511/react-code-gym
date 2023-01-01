// import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './NavMobile.scss';
import Avatar from '../../../assets/image/baesuzy.jpg';
function NavMobile({ closeModal }) {
    return (
        <div className="nav-mobile">
            <div className="over-lay" onClick={() => closeModal(false)}></div>
            <div className="nav-list">
                <div className="nav__moblie-user">
                    <img src={Avatar} alt="" />
                    <div className="nav__moblie-user-name">User-name</div>
                </div>
                <div className="mobile-search">
                    <input type="text" placeholder="Tìm Kiếm Sản Phẩm" />
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <ul className="nav-moblie-list">
                    <li className="nav-moblie-link">
                        <a href="/">Home</a>
                    </li>
                    <li className="nav-moblie-link">
                        <a href="/">Pages</a>
                    </li>
                    <li className="nav-moblie-link">
                        <a href="/">classes</a>
                    </li>
                    <li className="nav-moblie-link">
                        <a href="/">Portfolio</a>
                    </li>
                    <li className="nav-moblie-link">
                        <a href="/">Blog</a>
                    </li>
                    <li className="nav-moblie-link">
                        <a href="/">Contacts</a>
                    </li>
                    <li className="nav-moblie-link">
                        <a href="/">Login</a>
                    </li>
                    <li className="nav-moblie-link">
                        <a href="/">Register</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavMobile;
