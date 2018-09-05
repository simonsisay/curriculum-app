import React, { Component } from 'react'
import UserNavbar from '../user_page/UserNavbar'
import Curriculum from './Curriculum'
import ProgressBar from '../user_page/ProgressBar'
import './index.css'

class CurriculumPage extends Component {
		constructor(props){
			super(props)
		}


		render(){
			return(
				<div>
					<UserNavbar />
					<ProgressBar />
					<Curriculum header={this.props.match.params.id}/>
				</div>
			)
		}
}


export default CurriculumPage