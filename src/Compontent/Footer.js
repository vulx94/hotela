import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Footer = function(props) {
  return (
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
					<li><span>Tel:</span> 900000002</li>
					<li><span>Fax:</span> 0400000098</li>
					<li><span>Email:</span> info@youremail.com</li>
				</ul>
			</div>
			<div className="ft-bottom">
				<span>Copyright © 2017 All Rights Reserved </span>
			</div>
		</div>
	</footer> 

  )
}

export default Footer;
