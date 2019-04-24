import React, { Component } from 'react'
import bg from "../images/bg.jpg"
import posed, { PoseGroup } from 'react-pose';


const bgStyle = {

	backgroundImage: `url(${bg})`,

}



export class Home extends Component {

	constructor(props) {
		super(props);

		
		this.state = {
			
			isVisible: false
		};
	}

	

	render() {
		return (
			<div>
				<div className="home-flex-row one" style={bgStyle}>
					<div  className="box1"> 
					<p>Cafe squatters is a group of caffine addicts programmer with endless awesome ideas.  </p>
					<p>The goal of us is create as many as possible useless website to entertain you</p>
					</div>

				</div>
				<div className="home-flex-row two" >


					
				</div>

			</div>
		)
	}
}

export default Home
