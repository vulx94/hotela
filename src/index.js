import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route } from 'react-router-dom';

import App from './App';
import Booknow from './Booknow';
import Blog from './Blog';
import Blog404 from './Blog404';
import Blogsimple from './Blogsimple';
import Contact from './Contact';
import Categories from './Categories';
import Details from './Details';
import Login from './Login';
import Gallery from './Gallery';
import Home from './Home';
import Room from './Room';
import Register from './Register';
import Testimonial from './Testimonial';
import Shoppingcart from './Shoppingcart';

import './index.css';

const AppRouter = () => {
  return (
    <HashRouter>
      <div>
        <Route exact path='/' component={App} />
        <Route path="/home" component={Home} />
        <Route path="/booknow" component={Booknow} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog404" component={Blog404} />
        <Route path="/blogsimple" component={Blogsimple} />
        <Route path="/contact" component={Contact} />
        <Route path="/categories" component={Categories} />
        <Route path="/details" component={Details} />
        <Route path="/login" component={Login} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/room" component={Room} />
        <Route path="/register" component={Register} />
        <Route path="/testimonial" component={Testimonial} />
        <Route path="/shoppingcart" component={Shoppingcart} />
        {/*<Route path="/details" component={Details}></Route>*/}
      </div>
    </HashRouter>
  )
}

ReactDOM.render(<AppRouter/>, document.getElementById('root'));
registerServiceWorker();
