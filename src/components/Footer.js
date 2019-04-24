import React, { Component } from 'react'
import Popup from "reactjs-popup";
import TOS from './TOS'
import '../styles/footer.css'

export default class Footer extends Component {
	render() {
		return (
			<div className="Footer">
<footer>
					Copyright CafeSquatters 2019, All Rights Reserved
				</footer>	<Popup
					trigger={<p className="doc-link">Term Of Service</p>}
					modal
					closeOnDocumentClick
					className="pop">
					<TOS />
				</Popup>
			</div>
		)
	}
}
