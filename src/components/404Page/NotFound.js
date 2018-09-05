import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'


const NotFound = () => {
	return(
		<div className="not-found">
			<h2>Page Not Found</h2>
			<Link to="/"> Go Home </Link>
		</div>
	)
}

export default NotFound