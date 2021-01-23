import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components
import NavBar from './components/navbar.js';
import Footer from './components/footer.js';
// Pages
import Home from './pages/Home.js';


function App() {
  return (
    <div>
    <NavBar />
      <div class='container'>
        
          <Router>
            <Route exact path='/' component ={Home} />            
          </Router>

      </div>
      <Footer />
    </div>


  )
    
}

export default App;