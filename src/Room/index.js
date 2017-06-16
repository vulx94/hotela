/**
 * Bootcamps 2017
 */

import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import Navbar from '../Compontent/Navbar'
import request from 'request'
import Footer from '../Compontent/Footer'
import './styles.css';



class App extends Component {
	constructor(props)
	{
		super(props);
		console.log('contructor');
		this.state ={
			data: [],
		}	
	}


	componentDidMount() {
	console.log('componentDidMount');
	request({
		method: 'get',
		url: 'http://35.162.241.129:3000/api/v1/room',
	}, function (error, response, body) 
		{
			console.log('error:', error);
			const data = JSON.parse(body);
			console.log('data:', typeof data, data);
			this.setState(
				{
				data: data
				}
				)
		}.bind(this));
  	}

	componentWillUnmount()
	{
		console.log('conponentWillUnmount');
	}
	render(){
		console.log('render');
	}


  render() {
    return (
    <div className="rooms">
       <Navbar title="Room"></Navbar>
	{/*<!-- end navbar -->

	<!-- panel control left -->*/}
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
	{/*<!-- end panel control left -->

	<!-- panel control right -->*/}
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


	<div className="rooms app-pages app-section">
	<div className="container">
            {(this.state.data.length === 0) ? (<span>Loading...</span>) : ( <div className="row">
					{this.state.data.map(function(item, index) 
						{
							return (
									<div className="col s6" key={index}>
										<div className="entry">
											<img src={"http://35.162.241.129:3000/uploads/" + item.coverImage.filename} alt="" />
												<div className="content">
													<h5><Link to={'/room/' + item._id}>{item.title}</Link></h5>
													<p>Lorem ipsum dolor sit amet . . .</p>
													<h6><span><Link to ='/Details'>{item.price}</Link></span> / Night</h6>
												</div>
										</div>
									</div>
									)

						}				)
					}
										</div>
            	)
			}
<div className="pagination">
<ul>
<li><a href="">First</a></li>
<li className="active"><a href="">1</a></li>
<li><a href="">2</a></li>
<li><a href="">3</a></li>
<li><a href="">4</a></li>
<li><a href="">Last</a></li>
</ul>
</div>
</div>
</div>




	{/*<div className="rooms app-pages app-section">
		<div className="container">
			{
				(this.state.data.length ===0) ? (<span>Loading.....</span>) : (
					<div className="row">
				<div className="col s6">
					<div className="entry">
						<img src="img/room1.jpg" alt=""/>
						<div className="content">
							<h5><a href="">Beautiful Rooms</a></h5>
							<p>Lorem ipsum dolor sit amet . . .</p>
							<h6><span>$190</span> / Night</h6>
						</div>
					</div>
				</div>
				<div className="col s6">
					<div className="entry">
						<img src="img/room2.jpg" alt=""/>
						<div className="content">
							<h5><a href="">Luxury Rooms</a></h5>
							<p>Lorem ipsum dolor sit amet . . .</p>
							<h6><span>$190</span> / Night</h6>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col s6">
					<div className="entry">
						<img src="img/room3.jpg" alt=""/>
						<div className="content">
							<h5><a href="">Beautiful Rooms</a></h5>
							<p>Lorem ipsum dolor sit amet . . .</p>
							<h6><span>$190</span> / Night</h6>
						</div>
					</div>
				</div>
				<div className="col s6">
					<div className="entry">
						<img src="img/room4.jpg" alt=""/>
						<div className="content">
							<h5><a href="">Luxury Rooms</a></h5>
							<p>Lorem ipsum dolor sit amet . . .</p>
							<h6><span>$190</span> / Night</h6>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col s6">
					<div className="entry">
						<img src="img/room5.jpg" alt=""/>
						<div className="content">
							<h5><a href="">Beautiful Rooms</a></h5>
							<p>Lorem ipsum dolor sit amet . . .</p>
							<h6><span>$190</span> / Night</h6>
						</div>
					</div>
				</div>
				<div className="col s6">
					<div className="entry">
						<img src="img/room6.jpg" alt=""/>
						<div className="content">
							<h5><a href="">Luxury Rooms</a></h5>
							<p>Lorem ipsum dolor sit amet . . .</p>
							<h6><span>$190</span> / Night</h6>
						</div>
					</div>
				</div>
			</div>
			
				)


			}






			<div className="pagination">
				<ul>
					<li><a href="">First</a></li>
					<li className="active"><a href="">1</a></li>
					<li><a href="">2</a></li>
					<li><a href="">3</a></li>
					<li><a href="">4</a></li>
					<li><a href="">Last</a></li>
				</ul>
			</div>
		</div>
	</div>*/}
	
	<Footer title=""></Footer>
    </div>  
      
    );
  }
}

export default App;
