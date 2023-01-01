// import React, { Component } from 'react';

import { ListProduct } from './dataImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faRightLeft, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import ContainerDown from './containerDown/ContainerDown';
import './Container.scss';
function Container() {
    // tapItem = (e) => {
    //     e.target.classList.add('active');
    // };

    return (
        <div className="wrapper-container">
            <div className="grid">
                <div className="container-section">
                    <ul className="section-title">
                        <li className="section-tap-item active" onClick={(e) => this.tapItem(e)}>
                            TOP SELLERS
                        </li>
                        <li className="section-tap-item " onClick={(e) => this.tapItem(e)}>
                            FEATURED
                        </li>
                        <li className="section-tap-item " onClick={(e) => this.tapItem(e)}>
                            MOST REVIEWS
                        </li>
                        <div className="line"></div>
                    </ul>
                </div>
                <div className="container-product">
                    <div className="list-product">
                        {ListProduct &&
                            ListProduct.length > 0 &&
                            ListProduct.map((item, index) => {
                                return (
                                    <div
                                        className="item-product"
                                        key={index}
                                        //key={item.id}
                                    >
                                        <img src={item.imageSrc} alt="123" />
                                        <div className="name-product">{item.name}</div>
                                        <div className="price-product">${item.price}</div>
                                        <div className="more-info-product">
                                            <div className="cart-icon">
                                                <FontAwesomeIcon icon={faBasketShopping} />
                                            </div>
                                            <div className="eye-icon">
                                                <FontAwesomeIcon icon={faEye} />
                                            </div>
                                            <div className="heart-icon">
                                                <FontAwesomeIcon icon={faHeart} />
                                            </div>
                                            <div className="right-left-icon">
                                                <FontAwesomeIcon icon={faRightLeft} />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>

                <div className="container-comment">
                    <ContainerDown />
                </div>
            </div>
        </div>
    );
}

export default Container;
