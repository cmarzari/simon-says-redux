import React, { Component } from 'react'
import bg from "../images/bg.jpg"
import posed, { PoseGroup } from 'react-pose';
import '../styles/simon.css'
import {
	Button
} from 'reactstrap';


const bgStyle = {

	backgroundImage: `url(${bg})`,

}

const colors =["blue","red","green", "yellow"];



export class Home extends Component {

	constructor(props) {
		super(props);

		
		this.state = {
			
			isVisible: false
		};
	}

	

	render() {
		return (
			<div className="center simon-home">
				<h2>Simon says</h2>
				<div className="flex-row buttons">
					<Button>Start</Button>
					<p>easy</p>
					<p>medium</p>
					<p>hard</p>
				</div>
				<div className="box4 center">
					<div className="flex-row">
						<div className="box green">
						</div>
						<div className="box red">
						</div>
					</div>
					<div className="flex-row">
						<div className="box yellow">
						</div>
						<div className="box blue">
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home
