import React, { Component } from 'react';
import './NavBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="NavBar">
                    <a href="#">
                        <h1>Here's a header!</h1>
                    </a>
                </nav>
            </React.Fragment>
        )
    }
}
