import React from 'react';
import { Container, Row, Col} from 'reactstrap'
import CardItem from './CardItem'

class CardList extends React.Component {
  render() {
    return (
    	<div className="CardList">
    		<div className="pick">
    			<h1>Pick a path</h1>
    		</div>
	    	<Container>
	    	 <Row>
		    	<CardItem 
			    		cardImg={'http://devana.rs/blog/wp-content/uploads/2015/06/front-design1.jpg'}
			    		iconText = {'Learn'} 
			    		iconType={'pencil'}
			    		cardHeader = {'Beginner'}
			    		buttonColor={'orange'}
			    	/>
			    	<CardItem 
			    		cardImg={'http://www.tech-fair.com/wp-content/uploads/2018/04/Web-Design-Company.jpg'}
			    		iconText = {'Design'} 
			    		iconType = {'code'}
			    		cardHeader = {'Frontend'}
			    		buttonColor={'unique'}
			    	/>
			  </Row>
		   </Container>
		  <Container>
		   <Row>
		    	<CardItem 
			    		cardImg={'https://www.joshmorony.com/wp-content/uploads/2016/02/backend.jpg'}
			    		iconText = {'Develop'} 
			    		iconType={'desktop'}
			    		cardHeader = {'Backend'}
			    		buttonColor={'grey'}
			    	/>
			    	<CardItem 
			    		cardImg={'https://cdn-images-1.medium.com/max/825/1*CDlclChuNeeM5Shfev2RTg.jpeg'}
			    		iconText = {'Innovate'} 
			    		cardHeader = {'Advanced'}
			    		buttonColor={'success'}
			    		iconType={'gear'}
			    	/>
			    </Row>
		   </Container>
		 </div>
    )
  }
}

export default CardList