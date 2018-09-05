import React from 'react'
import { Progress } from 'reactstrap'

const ProgressBar = () => {
	return (
		<div className="progress-container">
			 <div className="text-center">50% completed</div>
	       <Progress value={50} className="progress" />
	   </div>
	)
}

export default ProgressBar