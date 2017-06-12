/**
 * Bootcamps 2017
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';


class App extends Component {
  render() {
    return (
    <div className="blog-simple">
            
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
  <div className="blog-single app-pages app-section">
    <div className="container">
      <div className="entry">
        <img src="img/blog1.jpg" alt=""/>
        <div className="user-date">
          <ul>
            <li><a href=""><i className="fa fa-user"></i> Admin</a></li>
            <li><a href=""><i className="fa fa-clock-o"></i> 2017-06-07</a></li>
          </ul>
        </div>
        <h5>Beautiful & Luxury Rooms</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt nemo tempore itaque voluptates. Temporibus iste, illo eius ex ducimus eligendi animi possimus aliquam excepturi omnis eaque veritatis ad. Atque, quas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ipsum deleniti nesciunt perferendis dolore voluptatibus soluta ipsam quibusdam velit dignissimos dolores officia maiores ex placeat, ipsa quae est asperiores iste! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel beatae iste doloremque doloribus neque quia. Quasi, ad, optio necessitatibus nesciunt officia perspiciatis non molestias odio a soluta reiciendis, eius incidunt?</p>
        <div className="share">
          <ul>
            <li><h6>Share via :</h6></li>
            <li><a href=""><i className="fa fa-facebook-square"></i></a></li>
            <li><a href=""><i className="fa fa-twitter-square"></i></a></li>
            <li><a href=""><i className="fa fa-google-plus-square"></i></a></li>
            <li><a href=""><i className="fa fa-instagram"></i></a></li>
          </ul>
        </div>
        <div className="author">
          <img src="img/author.png" alt=""/>
          <div className="entry">
            <strong><a href="">John Doe</a></strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
            <ul>
              <li><a href=""><i className="fa fa-facebook-square"></i></a></li>
              <li><a href=""><i className="fa fa-twitter-square"></i></a></li>
              <li><a href=""><i className="fa fa-google-plus-square"></i></a></li>
              <li><a href=""><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="comment">
          <h6>2 Comment</h6>
          <div className="content">
            <img src="img/comment1.png" alt=""/>
            <div className="entry">
              <strong><a href="">John Doe</a></strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
            </div>
          </div>
          <div className="content">
            <img src="img/comment2.png" alt=""/>
            <div className="entry">
              <strong><a href="">John Doe</a></strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
            </div>
          </div>
        </div>
        <div className="post-comment">
          <h6>Leave a Reply</h6>
          <div className="content">
            <form action="#">
              <input type="text" placeholder="Name"/>
              <input type="email" placeholder="Email"/>
              <input type="text" placeholder="Website"/>
              <textarea cols="20" rows="10" placeholder="Comment"></textarea>
              <button className="button">Post Comment</button>
            </form>
          </div>
        </div>
      </div>
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
