import React from 'react';
import '../assets/styling/SpinningLogo.css';
import logo from '../assets/images/neon_neuron.png';

const SpinningLogo = () =>{
    return(
    <div>
        <img class= 'rotate' src = { logo } alt='logo' />
    </div>
    )
}

export default SpinningLogo;