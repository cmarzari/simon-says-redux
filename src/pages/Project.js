import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import ListItemText from '@material-ui/core/ListItemText';


import '../styles/project.css'

import d from '../images/d.png'
import coming from '../images/comingsoon.png'
import git from '../images/git.png'


export default class Project extends Component {
	constructor(props) {
		super(props);

		
		this.state = {
			width: window.innerWidth,	
			
		};
		this.updateDimensions = this.updateDimensions.bind(this);
	}

	updateDimensions() {
		this.setState({
		  
		  width: window.innerWidth
		});
	}


	      componentDidMount() {
		window.addEventListener("resize", this.updateDimensions);
	      }
	    
	      componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	      }
	render() {
		const { isMobile } = this.state;
		console.log(this.state.width)
		if(this.state.width>900){
			return (
				<div className="project">
					<Grid container spacing={16}>
					
	
					<Grid item xs={12} md={6}>
						<Typography variant="h6" >
							Launched website
						    </Typography>
						<div className="project-list finished" >
							
							<List >
								<ListItem>
									<ListItemAvatar>
										<Avatar>
											<img src={d} />
										</Avatar>
									</ListItemAvatar>
									<a href="https://divinefuckingintellect.com/">
									<ListItemText
										primary="divinefuckingintellect.com"
										secondary='Divine Fucking Intellect is a shitty website to get abso-fucking-lutely awesome facts. We work hard to make even the most SFW fact NSFW.'
									/>
									</a>
									
								</ListItem>
								<a href="https://gitgewd.com/">
								<ListItem>
									<ListItemAvatar>
										<Avatar>
											<img src={git} />
										</Avatar>
									</ListItemAvatar>
									<ListItemText
										primary="gitgewd.com/"
										secondary='Git Gewd is a website aimed to help git beginners learn how to use git by generating helpful commands and tips'
									/>
								</ListItem>
								</a>
								
	
								
							</List>
						</div>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography variant="h6" >
							Coming soon
						    </Typography>
						<div className="project-list" >
							
							<List >
								<ListItem className="developing">
									<ListItemAvatar>
										<Avatar>
											<img src={coming} />
										</Avatar>
									</ListItemAvatar>
									<ListItemText
										primary="d8nite"
										secondary='d8nite is the website give you super useful date night ideas'
									/>
								</ListItem>
	
								{/* <ListItem className="developing">
									<ListItemAvatar>
										<Avatar>
											<img src={coming} />
										</Avatar>
									</ListItemAvatar>
									<ListItemText
										primary="divine fucking intellect"
										secondary='The fucking fact website'
									/>
								</ListItem> */}
	
								
							</List>
						</div>
					</Grid>
					</Grid>
					
					
				</div>
			)
		}else{
			return (
				<div>
					
					
	
					<Grid item xs={12} md={6} className="mobile one">
						<Typography variant="h6" >
							Launched website
						    </Typography>
						<div className="project-list one" >
							
							<List >
								<ListItem>
									<ListItemAvatar>
										<Avatar>
											<img src={d} />
										</Avatar>
									</ListItemAvatar>
									<a>
									<ListItemText
										primary="Lorem ipsum dolor sit amet, ea hinc deserunt complectitur nec, est cu ponderum efficiendi, "
										secondary='Lorem ipsum dolor sit amet, ea hinc deserunt complectitur nec, est cu ponderum efficiendi, '
									/>
									</a>
									
								</ListItem>
	
								<ListItem>
									<ListItemAvatar>
										<Avatar>
											<img src={d} />
										</Avatar>
									</ListItemAvatar>
									<ListItemText
										primary="divine fucking intellect"
										secondary='The fucking fact website'
									/>
								</ListItem>
	
								
							</List>
						</div>
					</Grid>
					<Grid item xs={12} md={6} className="mobile">
						<Typography variant="h6" >
							Coming soon
						    </Typography>
						<div className="project-list one" >
							
							<List >
								<ListItem>
									<ListItemAvatar>
										<Avatar>
											<img src={d} />
										</Avatar>
									</ListItemAvatar>
									<ListItemText
										primary="Lorem ipsum dolor sit amet, ea hinc deserunt complectitur nec, est cu ponderum efficiendi, "
										secondary='Lorem ipsum dolor sit amet, ea hinc deserunt complectitur nec, est cu ponderum efficiendi, '
									/>
								</ListItem>
	
								<ListItem>
									<ListItemAvatar>
										<Avatar>
											<img src={d} />
										</Avatar>
									</ListItemAvatar>
									<ListItemText
										primary="divine fucking intellect"
										secondary='The fucking fact website'
									/>
								</ListItem>
	
								
							</List>
						</div>
					</Grid>
					
					
					
				</div>
			)
		}
		
	}
}
