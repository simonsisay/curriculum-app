import React, { Component } from 'react'
import UserNavbar from './UserNavbar'
import ProgressBar from './ProgressBar'
import CardList from './CardList'
import './index.css'

class UserPage extends Component {
	render(){
		return (
			<div>
				<UserNavbar />
				<ProgressBar />
				<CardList />
			</div>
		)
	}
}


export default UserPage