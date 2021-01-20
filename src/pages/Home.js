import React, { Component } from 'react';
import Skills from '../components/Skills.js';
import { Grid, Row, Col } from 'react-bootstrap';

import '../assets/styling/Home.css';
import sun from '../assets/images/sun_rise.jpg'
import sassy from '../assets/images/sassy.jpg'

export default class Home extends Component {
    render() {
        return (
        <div class='content'>
            {/* Introduction Submodule */}
            <Row>
              <Col  lg= {6} md={12} sm={12}>
                <div class='image'>
                </div>
              </Col>
      

              <Col lg={6} md={12} sm={12}>    
                <div class='content-right'>
                  <div>
                  <p class ='name'><span class='underline-letter'>R</span><span class='underline'>obert</span>
                    
                    Mwaniki</p>

                  <p class='caption'>
                    I enjoy technology, and using computer languages to creatively solve tough problems.
                    A new day, is a new opportunity to learn something new, and improve my skills.
                  </p>

                  <p> <hr />   </p>
                </div>

                <Row>

                  <p class='description'> 
                    I am currently working as a LDP Associate Engineer at Rockwell Automation. 
                    It is a rotational program, in which every 6 months you get new oppotunities to work in different
                    business groups. So far, i have been trained in EIT, worked as a Remote Service Engineer,
                    Motion Embedded Software Engineer, Hardware Firmware Test Engineer, currently IT Software Engineering.

                  </p>

                  <p class='description'>
                    I received my B.S. in Computer Engineering from North Carolina A&T in 2019. I live in Ohio with my dog Sassy.
                  </p>
                  <img class= 'image_2' src = { sassy } alt='Sun rise' />
                    {/* Avatar */}


                    {/* About */}

                  </Row>
                </div>
                </Col>
            </Row>
              
             
          {/* Skills SubModule  */}
          <div class='container-md'>
              <h1> <span class='underline-letter'>S</span><span class='underline'>kills</span></h1>
              <hr class ='line' />
              <Skills />
              <h1>⇣</h1>
          </div>
        </div>
        )
    }
}