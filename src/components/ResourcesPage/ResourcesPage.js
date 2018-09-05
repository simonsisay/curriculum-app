import React, { Component } from 'react'
import UserNavbar from '../user_page/UserNavbar'
import Resources from './Resources'
import './index.css'
import ProgressBar from '../user_page/ProgressBar'

class ResourcesPage extends Component {
	render(){
		return(
			<div>
				<UserNavbar />
				<ProgressBar />
				<Resources />
			</div>
		)
	}
}

export default ResourcesPage