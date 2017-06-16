/**
 * Bootcamps 2017
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import request from 'request';
import './styles.css';
import Navbar from '../Compontent/Navbar'

class App extends Component {
	constructor(props)
	{
		super(props);
		console.log('DetailsRoom', props.match.params.id);
		this.state ={
			formcomment:null,
			form: {},
			formDetails: null,
			value: 'Please write an essay about your favorite DOM element.',
		}
	
		this.onPostComment =  this.onPostComment.bind(this);
		this.onNameChange = this.onNameChange.bind(this);
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onWebsiteChange = this.onWebsiteChange.bind(this);
		this.onCommentChange = this.onCommentChange.bind(this);
			
		
	}
	componentDidMount() {
	const id = this.props.match.params.id;
	// const form = this.state.formcomment;
	// const idd = form.roomId;
	// idd = this.props.match.params.id
	// const form = this.state.form;
	// form.roomId = id;
	console.log('componentDidMount');
	request({
		method: 'get',
		url: 'http://35.162.241.129:3000/api/v1/room/' + id,
	}, function (error, response, body) 
		{
			console.log('error:', error);
			const data = JSON.parse(body);
			console.log('data:', typeof data, data);
			this.setState(
				{	
				formDetails: data
				}
				)
		}.bind(this));


	request({
		
		method: 'get',
		url : 'http://35.162.241.129:3000/api/v1/comment?query={%22roomId%22:%22'+ id +'%22}'
	}, function (error, response, body) 
		{
			console.log('error:', error);
			const data = JSON.parse(body);
			console.log('data:', typeof data, data);
			this.setState(
				{	
				formcomment : data
				}
				)
		}.bind(this));
		
  	}
	onPostComment(e) {
		const form = this.state.form;
		form.roomId = this.props.match.params.id;
		e.preventDefault();
		alert('Post Comment Clicked !' + JSON.stringify(this.state.form));
		 request({
		method: 'post',
		headers: {
			'content-type': 'application/json'
		},
		url: 'http://35.162.241.129:3000/api/v1/comment',
		body: JSON.stringify(form),
		}, function (error, response, body) {
		console.log('error', error);
		console.log('response', response);
		console.log('body', body);
		}.bind(this));
		
	}
	onNameChange(e) {
    console.log('onNameChange', e.target.value);
    this.setState({
      form: {
        ...this.state.form,
        name: e.target.value
      }
    });
	}
	onEmailChange(e){
		console.log('onEmailChange', e.target.value);
		this.setState({
			form: {
				...this.state.form,
				mail: e.target.value
			}
		});
	
  }	

	onWebsiteChange(e){
		console.log('onEmailChange', e.target.value);
		this.setState({
			form: {
				...this.state.form,
				website: e.target.value
			}
		});
	
  }

	onCommentChange(e){
		console.log('onEmailChange', e.target.value);
		this.setState({
			form: {
				...this.state.form,
				comment: e.target.value
			}
		});
	
  }


	componentWillUnmount()
	{
		console.log('conponentWillUnmount');
	}
	render(){
		console.log('render');
	}

  render()
   {
	   const commentRoom = this.state.formcomment;
	   const detailRom = this.state.formDetails;
	       return (
    <div className="details">
		<Navbar title="Room Detail"/>
		{!detailRom && (<span>Loading...</span>)}
		{detailRom && (
			<div className="details app-pages app-section">
            <div className="container">
              <img src={"http://35.162.241.129:3000/uploads/" + detailRom.coverImage.filename} alt="" />
              <h3>{detailRom.title}</h3>
              <div className="rating">
                <span className="active"><i className="fa fa-star"></i></span>
                <span className="active"><i className="fa fa-star"></i></span>
                <span className="active"><i className="fa fa-star"></i></span>
                <span className="active"><i className="fa fa-star"></i></span>
                <span className=""><i className="fa fa-star"></i></span>
              </div>

              <div dangerouslySetInnerHTML={{__html: detailRom.content}}></div>

              <ul className="button-ul">
                <li><button className="button">Book Now</button></li>
                <li><button className="button">Add to Card</button></li>
              </ul>
              <div className="comment">
                <h6>2 comment</h6>
				{!commentRoom && (<span>Loading...</span>)}
				{commentRoom && (
                <div className="content">
                  <img src="img/comment1.png" alt="" />
                  <div className="entry">
                    <strong><a href="">{commentRoom.name}</a></strong>
                    <p>{commentRoom.content}</p>
                  </div>
                </div>)}
            	</div>
              <div className="post-comment">
                <h6>Post Comments</h6>
                <div className="content">
                  <form action="#">
                    <input type="text" placeholder="Name"
                      value={this.state.form.name}
                      onChange={this.onNameChange} />
                    <input type="email" placeholder="Email"
                      value={this.state.form.email}
                      onChange={this.onEmailChange} />
                    <input type="text" placeholder="Website"
                      value={this.state.form.website}
					  onChange={this.onWebsiteChange} />
                    <textarea cols="20" rows="10" placeholder="Comment"
                      value={this.state.form.comment}
                      onChange={this.onCommentChange}></textarea>
                    <button className="button" onClick={this.onPostComment}>Post Comment</button>
                  </form>
                </div>
              </div>
            </div>
          </div>	
		)}
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
