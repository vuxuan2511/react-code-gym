import React, { Component } from 'react';
import './Banner.scss';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="wrapper">
                <div className="grid">heello from banner</div>
            </div>
        );
    }
}
export default Banner;
