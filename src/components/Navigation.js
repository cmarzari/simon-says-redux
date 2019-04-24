import React, { Component } from 'react'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';
import '../styles/nav.css'
import posed from 'react-pose'
import Skeleton from 'react-loading-skeleton';


const Box = posed.div({
	hoverable: true,
	pressable: true,
	init: {
		scale: 1,
		boxShadow: '0px 0px 0px rgba(0,0,0,0)'
	},
	hover: {
		scale: 1.2,
		boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
	},
	press: {
		scale: 1.1,
		boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
	}
});
export default class Navigation extends Component {
	constructor(props) {
		super(props);

		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true,
			isVisible: true
		};
	}

	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}



	render() {
		return (
			<div>
				<Navbar color="white" light expand="md" >
					<NavbarBrand href="/" className="mr-auto"><span className="logo1">Redux</span><span className="logo2">Simon Says</span></NavbarBrand>
					
				
					
				</Navbar>
			</div>
		)
	}
}
