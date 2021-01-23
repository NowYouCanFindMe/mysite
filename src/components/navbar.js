import React, { Component } from 'react';
import github from '../assets/images/github_icon.png'

// styling
import '../assets/styling/NavBar.css';
import '../App.css';

class NavBar extends Component {
    render() {
        return(
            <div>
                <div className='bg-image'>
                    <div class='topnav'>
                        <a class='active' href="/"><h1> Robert Mwaniki</h1></a>
                    
                        <div class='topnav-right'>
                            <a href="mailto:rgmwanik@aggies.ncat.edu" class="cta">
                                <span>Contact</span>
                                <svg width="13px" height="10px" viewBox="0 0 13 10">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </a>
                            <a> | </a>
                            <a href="https://www.linkedin.com/in/robert-mwaniki/" target='_blank' class="cta">
                                <span>LinkedIn</span>
                                <svg width="13px" height="10px" viewBox="0 0 13 10">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </a>
                            <a> | </a>
                            <a href="https://github.com/NowYouCanFindMe/" target='_blank'> <img class= 'github' src = { github } alt='Github' /></a>
                            
                        </div>
                    </div>
             
                  
                </div>

            </div>
        );
    }
}

export default NavBar;