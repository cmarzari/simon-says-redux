import React, { Component } from 'react'
import bg from '../images/about-bg.jpg';



const bgStyle = {

	backgroundImage: `url(${bg})`,
	backgroundColor: "#e8e8eb"

}
export class About extends Component {
	render() {
		return (
			<div>
				<div className="home-flex-row about-one" style={bgStyle}>
					<div className="intro-flex-column">
						<p>Here is the team!!!</p>
						<div className="row">
							<div className="round1 row">
								some pic
							</div>
							<div className="box2 row">
								some intro
							</div>
						</div>
						<br />
						<div className="row">
						<div className="box3 row">
								some intro
							</div>
							<div className="round1 row">
								some pic
							</div>
							
						</div>
						<br />
						<div className="row">
							<div className="round1 row">
								some pic
							</div>
							<div className="box2 row">
								some intro
							</div>
						</div>

					</div>


				</div>
			</div>
		)
	}
}

export default About
