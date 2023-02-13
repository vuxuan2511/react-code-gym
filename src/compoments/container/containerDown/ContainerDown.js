// import React, { Component } from 'react';
import Slider from 'react-slick';

import './ContainerDown.scss';
import { ListUserComment, ListCategory } from '../dataImage';

function ContainerDown() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="wrapper-container-down">
            <div className="grid">
                <div className="container-comment">
                    <div className="title">See What They Said About Us</div>

                    <Slider {...settings}>
                        {ListUserComment &&
                            ListUserComment.length > 0 &&
                            ListUserComment.map((item, index) => {
                                return (
                                    <div className="user-comment" key={index}>
                                        <img src={item.avartar} alt={item.name} />
                                        <div className="comment">{item.comment}</div>
                                        <div className="name">{item.name}</div>
                                        <div className="happy-clinet">happy clinets</div>
                                    </div>
                                );
                            })}
                    </Slider>
                </div>
                <div className="container-category">
                    {ListCategory &&
                        ListCategory.length > 0 &&
                        ListCategory.map((item, index) => {
                            return (
                                <a href="/" key={index}>
                                    <img className="img-category" src={item.imgSrc} alt={item.id} />
                                </a>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
export default ContainerDown;
