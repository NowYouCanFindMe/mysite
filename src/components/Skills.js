import React, { Component } from 'react';
import Data from '../assets/data/skills';

import '../assets/styling/Skills.css';

class Skills extends Component {
    
    constructor(props) {
        super(props);
    }


    
    render ( ) {
      
        return (
        <div class ='card-container'>   {Data.map((item, id) => <Display index ={id} type={item.type}
                                                                description={item.description} details={item.details} />)}</div>
            
        )
  
    }
}


class Display extends Skills {

    constructor(props) {
        super(props);
    
    }

    changeBackground= (e) => {
        e.target.style.color = 'black';
    }

    defaultBackground = (e) => {
        e.target.style.color = 'white';
    }
  
    render() {

        return(

                <div>
                    
                  <div class='card'>
                  <b>{this.props.type}</b> {" - " + this.props.description} 
                  <div  onMouseOver= {this.changeBackground} onMouseOut = {this.defaultBackground}>
                       <ul>{this.props.details.map(item => <li>{item} </li>)} </ul>
                  </div>

                  </div>
                </div>
            
           
        )
    }

  
}


export default Skills;