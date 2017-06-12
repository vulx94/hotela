/**
 * Bootcamps 2017
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.svg';



class App extends Component {
  render() {
    return (
      <div className="app">
        
        <p><Link to="/Home">Home</Link></p>
        <p><Link to="/Blog">Blog</Link></p>
        <p><Link to="/Blogsimple">Blogple</Link></p>
        <p><Link to="/Blog404">Blog</Link></p>
        <p><Link to="/Booknow">Book</Link></p>
        <p><Link to="/Categories">Cateies</Link></p>
        <p><Link to="/Contact">Cont</Link></p>
        <p><Link to="/Details">Deta</Link></p>
        <p><Link to="/Room">Room</Link></p>
        <p><Link to="/Gallery">Gall</Link></p>
        <p><Link to="/Register">Regir</Link></p>
        <p><Link to="/Shoppingcart">Shopgcart</Link></p>
        <p><Link to="/Testimonial">Testnial</Link></p>
        
        



         
      </div>
    );
  }
}

export default App;
