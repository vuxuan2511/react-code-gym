// import React, { Component } from 'react';
import './Banner.scss';
import PowerRack from '../../assets/image/power-rack.png';
import Strength from '../../assets/image/strength.png';
import Dumbbells from '../../assets/image/dumbbells.png';

function Banner() {
    return (
        <div className="wrapper-banner">
            <div className="grid">
                <div className="banner-up">
                    <div className="banner-up-left">
                        <div className="shop-name-up">Dumbbells Shop</div>
                        <div className="shop-name-down">Best body fitness</div>
                        <div className="description">
                            Lorem ipsum dolor sit amet, no qui debet putant sententiae, in sumo eros ius, usu purto eius
                            in. No vix impetus graecis voluptua, sed et indoctum omittantur. Cu assum soluta fierent
                            pri,
                        </div>
                        <button className="btn-shop-now">SHOP NOW</button>
                    </div>
                    <div className="banner-up-right">
                        <div className="img"></div>
                    </div>
                </div>
                <div className="banner-down">
                    <div className="slide-1"></div>
                    <div className="slide-2">
                        <img src={Strength} alt="123" />
                        <div className="slide-text">STRENGTH</div>
                        <div className="slide-description">
                            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore
                            et dolore magna aliqua.
                        </div>
                    </div>
                    <div className="slide-3"></div>
                    <div className="slide-4">
                        <img src={Dumbbells} alt="123" />
                        <div className="slide-text">DUMMBBELLS</div>
                        <div className="slide-description">
                            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore
                            et dolore magna aliqua.
                        </div>
                    </div>
                    <div className="slide-5"></div>
                    <div className="slide-6">
                        <img src={PowerRack} alt="123" />
                        <div className="slide-text">POWER RACK & CAGES</div>
                        <div className="slide-description">
                            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore
                            et dolore magna aliqua.
                        </div>
                    </div>
                </div>
                <div className="banner-down-mobile" hidden>
                    <div className="slide-1"></div>
                    <div className="slide-2">
                        <img src={Strength} alt="123" />
                        <div className="slide-text">STRENGTH</div>
                        <div className="slide-description">
                            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore
                            et dolore magna aliqua.
                        </div>
                    </div>

                    <div className="slide-4">
                        <img src={Dumbbells} alt="123" />
                        <div className="slide-text">DUMMBBELLS</div>
                        <div className="slide-description">
                            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore
                            et dolore magna aliqua.
                        </div>
                    </div>
                    <div className="slide-3"></div>
                    <div className="slide-5"></div>
                    <div className="slide-6">
                        <img src={PowerRack} alt="123" />
                        <div className="slide-text">POWER RACK & CAGES</div>
                        <div className="slide-description">
                            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore
                            et dolore magna aliqua.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
