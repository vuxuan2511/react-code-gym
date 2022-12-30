import React, { Component } from 'react';
import './Defaultlayout.scss';
import Header from './header/Header';
import Banner from './banner/Banner';

class Defaultlayout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Banner />
            </div>
        );
    }
}
export default Defaultlayout;
