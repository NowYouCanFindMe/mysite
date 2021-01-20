import React, { Component } from 'react';
import AboutMe from '../assets/data/aboutme';

// styling
import '../assets/styling/Footer.css';
import '../App.css';

class Footer extends Component {
    render() {
        return(
            <footer>
                <div>
                    <h3> Connect with me on <a href="https://www.linkedin.com/in/robert-mwaniki/" target='_blank'>LinkedIn</a></h3>
                </div>
                <p>Author: Robert Mwaniki</p>
                <p> {AboutMe.map(item => item.description)} </p>
                <p> Last Update:{AboutMe.map(item => item.lastUpdate)} </p>
            </footer>

            
        );
    }
}

export default Footer;