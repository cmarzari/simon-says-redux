import React, { Component } from 'react'
import Popup from "reactjs-popup";
import TOS from './TOS'
import '../styles/footer.css'

export default class Footer extends Component {
	render() {
		return (
			<div className="Footer">
				<footer>
					Redux Simon Says 2019
				</footer>	
				{/* <Popup
					trigger={<p className="doc-link">Term Of Service</p>}
					modal
					closeOnDocumentClick
					className="pop">
					<TOS />
				</Popup> */}
			</div>
		)
	}
}
