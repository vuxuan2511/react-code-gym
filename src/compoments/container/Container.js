//import React, { useState, SyntheticEvent } from 'react';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { ListProduct } from './dataImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faRightLeft, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import ContainerDown from './containerDown/ContainerDown';
import './Container.scss';
function Container() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <div className="wrapper-container">
            <div className="grid">
                <div className="container-section">
                    <Box sx={{ width: '100%' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                        >
                            <Tab value="one" label="TOP SELLERS" />
                            <Tab value="two" label="FEATURED" />
                            <Tab value="three" label="MOST REVIEWS" />
                        </Tabs>
                    </Box>
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
