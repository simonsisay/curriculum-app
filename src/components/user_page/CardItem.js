import React, {Component } from 'react'
import { Button,Fa, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'

class CardItem extends Component {
	render(){
	 return(
		 <Col sm className="card" m-2>
		 	<Card className="card-image" style={{backgroundImage: `url(${this.props.cardImg})`, backgroundSize:'cover'}}>
			  <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 pl-2">
				    <div>
				      <h5 className="orange-text"><Fa icon={this.props.iconType} /> {this.props.iconText}</h5>
				      
				     		<h1>{this.props.cardHeader}</h1>

				     	<Link to={`/user/${this.props.cardHeader.toLowerCase()}`}>
				      <Button color={this.props.buttonColor}>
					      			<Fa icon="clone left" /> View Curriculum
					    </Button>
					     </Link>
				    </div>
				  </div>
			</Card>
		 </Col>
		)
	}
}

export default CardItem