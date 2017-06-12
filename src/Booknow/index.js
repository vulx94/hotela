/**
 * Bootcamps 2017
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';


class App extends Component {
  render() {
    return (
    <div className="book-now">
              <div className="navbar">
    <div className="container">
      <div className="panel-control-left">
        <a href="#" data-activates="slide-out-left" className="sidenav-control-left"><i className="fa fa-bars"></i></a>
      </div>
      <div className="site-title">
        <a href="index.html" className="logo"><h1>HOTELA</h1></a>
      </div>
      <div className="panel-control-right">
        <a href="#" data-activates="slide-out-right" className="sidenav-control-right"><i className="fa fa-shopping-bag"></i><span>2</span></a>
      </div>
    </div>
  </div>
 
 

  <div className="panel-control-left">
    <ul id="slide-out-left" className="side-nav collapsible"  data-collapsible="accordion">
      <li>
        <a href="index.html"><i className="fa fa-home"></i>Home</a>
      </li>
      <li>
        <div className="collapsible-header"><i className="fa fa-file-text-o"></i>Categories<span><i className="fa fa-chevron-right"></i></span></div>
        <div className="collapsible-body">
          <ul className="categories-in collapsible"  data-collapsible="accordion">
            <li><a href="categories.html">Luxury Room</a></li>
            <li><a href="categories.html">Beautiful Room</a></li>
            <li><a href="categories.html">Suite Room</a></li>
            <li><a href="categories.html">Family Room</a></li>
            <li><a href="categories.html">Double Room</a></li>
          </ul>
        </div>
      </li>
      <li>
        <a href="room.html"><i className="fa fa-th-large"></i>Room List</a>
      </li>
      <li>
        <a href="details.html"><i className="fa fa-list"></i>Room Details</a>
      </li>
      <li>
        <a href="shopping-cart.html"><i className="fa fa-shopping-cart"></i>Shopping Cart</a>
      </li>
      <li>
        <a href="book-now.html"><i className="fa fa-send"></i>Book Now</a>
      </li>
      <li>
        <a href="gallery.html"><i className="fa fa-image"></i>Gallery</a>
      </li>
      <li>
        <div className="collapsible-header"><i className="fa fa-rss"></i>Blog <span><i className="fa fa-chevron-right"></i></span></div>
        <div className="collapsible-body">
          <ul className="side-nav-panel">
            <li><a href="blog.html">Blog</a></li>
            <li><a href="blog-single.html">Blog Single</a></li>
          </ul>
        </div>
      </li>
      <li>
        <div className="collapsible-header"><i className="fa fa-file-powerpoint-o"></i>Pages <span><i className="fa fa-chevron-right"></i></span></div>
        <div className="collapsible-body">
          <ul className="side-nav-panel">
            <li><a href="faq.html">Faq</a></li>
            <li><a href="testimonial.html">Testimonial</a></li>
            <li><a href="404.html">404 Page</a></li>
          </ul>
        </div>
      </li>
      <li>
        <a href="contact.html"><i className="fa fa-envelope"></i>Contact Us</a>
      </li>
      <li>
        <a href="login.html"><i className="fa fa-sign-in"></i>Login</a>
      </li>
      <li>
        <a href="register.html"><i className="fa fa-user-plus"></i>Register</a>
      </li>
    </ul>
  </div>
 
 


  <div className="panel-control-right">
    <div id="slide-out-right" className="side-nav">
      <div className="row entry">
        <div className="col s4">
          <img src="img/cart1.jpg" alt=""/>
        </div>
        <div className="col s6">
          <div className="desc">
            <h6>Luxury Room</h6>
            <div className="rating">
              <span className="active"><i className="fa fa-star"></i></span>
              <span className="active"><i className="fa fa-star"></i></span>
              <span className="active"><i className="fa fa-star"></i></span>
              <span className="active"><i className="fa fa-star"></i></span>
              <span className=""><i className="fa fa-star"></i></span>
            </div>
            <h6><span>$150.00</span></h6>
          </div>
        </div>
        <div className="col s2">
          <div className="action">
            <i className="fa fa-remove"></i>
          </div>
        </div>
      </div>
      <div className="row entry">
        <div className="col s4">
          <img src="img/cart2.jpg" alt=""/>
        </div>
        <div className="col s6">
          <div className="desc">
            <h6>Beautiful Room</h6>
            <div className="rating">
              <span className="active"><i className="fa fa-star"></i></span>
              <span className="active"><i className="fa fa-star"></i></span>
              <span className="active"><i className="fa fa-star"></i></span>
              <span className=""><i className="fa fa-star"></i></span>
              <span className=""><i className="fa fa-star"></i></span>
            </div>
            <h6><span>$150.00</span></h6>
          </div>
        </div>
        <div className="col s2">
          <div className="action">
            <i className="fa fa-remove"></i>
          </div>
        </div>
      </div>
      <div className="row price">
        <div className="col s8">
          <h6>Total</h6>
        </div>
        <div className="col s4">
          <h6>$300.00</h6>
        </div>
      </div>
      <ul>
        <li>
          <button className="button">Book Now</button>
        </li>
        <li>
          <button className="button">View Cart</button>
        </li>
      </ul>
    </div>
  </div>
  
  


  <div className="book-now app-pages app-section">
    <div className="container">
      <div className="pages-title">
        <h3>Book Now</h3>
      </div>
      <div className="order">
        <h5 className="title">Your Order</h5>
        <div className="row">
          <div className="col s8">
            <h6><a href="">Beautiful Room</a></h6>
          </div>
          <div className="col s4 text-right">
            <h6>$150.00</h6>
          </div>
          <div className="col s8">
            <h6><a href="">Luxury Room</a></h6>
          </div>
          <div className="col s4 text-right">
            <h6>$150.00</h6>
          </div>
          <div className="col s8">
            <h5><span>Total</span></h5>
          </div>
          <div className="col s4 text-right">
            <h5><span>$300.00</span></h5>
          </div>
          <button className="button">View Shopping Cart</button>
        </div>
      </div>
      <form action="#" className="book-now-form">
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <input type="tel" placeholder="Phone"/>
        <select>
          <option value="" disabled selected="">Room Types</option>
          <option value="1">Standard Room</option>
          <option value="2">Double Room</option>
          <option value="3">Family Room</option>
          <option value="3">Suite Room</option>
        </select>
        <div className="row">
          <div className="col s6">
            <input type="text" placeholder="Arrival Date" className="datepicker"/>
          </div>
          <div className="col s6">
            <input type="text" placeholder="Departure Date" className="datepicker"/>
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <select>
              <option value="" disabled selected="">Adult</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3">4</option>
            </select>
          </div>
          <div className="col s6">
            <select>
              <option value="" disabled selected="">Children</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3">4</option>
            </select>
          </div>
        </div>        
        <textarea cols="30" rows="10" placeholder="Additional Message"></textarea>
        <button type="button" className="button">Submit</button>
      </form>
    </div>
  </div>
  
  


  <footer>
    <div className="container">
      <h6>Find & follow us</h6>
      <ul className="icon-social">
        <li className="facebook"><a href=""><i className="fa fa-facebook"></i></a></li>
        <li className="twitter"><a href=""><i className="fa fa-twitter"></i></a></li>
        <li className="google"><a href=""><i className="fa fa-google"></i></a></li>
        <li className="instagram"><a href=""><i className="fa fa-instagram"></i></a></li>
        <li className="rss"><a href=""><i className="fa fa-rss"></i></a></li>
      </ul>
      <div className="tel-fax-mail">
        <ul>
          <li><span>Tel:</span> 900000o02</li>
          <li><span>Fax:</span> 0400000o98</li>
          <li><span>Email:</span> info@youremail.com</li>
        </ul>
      </div>
      <div className="ft-bottom">
        <span>Copyright © 2017 All Rights Reserved </span>
      </div>
    </div>
  </footer>
	
    </div>  
      
    );
  }
}

export default App;
