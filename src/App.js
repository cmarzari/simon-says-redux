import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//import css
import './styles/master.css';

//import components
import Footer from './components/Footer'
import Navigation from './components/Navigation'


//import page
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'

import ReactGA from 'react-ga';
function initializeReactGA() {
	ReactGA.initialize('');// add the track ID
	ReactGA.pageview('/homepage');
    }
class App extends Component {
	
  render() {
	  {initializeReactGA()}
    return (
      
	
	<Router>
	<div>
	<Navigation/>
	
		<Route path="/" component = {Home} exact/>
		<Route path="/about" component = {About} />
		<Route path="/project" component = {Project} />
	<Footer/>
	</div>
	</Router>
        
      
    );
  }
}

export default App;
