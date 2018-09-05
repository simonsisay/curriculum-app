import React, { Component } from 'react'
import SignUpForm from './SignUpForm'
import NavBar from '../common/Navbar'
import './index.css'

class SignUp extends Component {
	render(){
		return(
			<div className="sign-up-main">
				<NavBar signWhat={'Sign in'} brandName={'Masa Learn'} linkTo={'/'} />
				<div className="main-container">
					<SignUpForm />
				</div>
			</div>
		)
	}
}

export default SignUp