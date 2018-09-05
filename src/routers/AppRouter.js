import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import App from '../components/home_page/App'
import SignUp from '../components/signup_page/SignUP'
import About from '../components/about_page/About'
import NotFound from '../components/404Page/NotFound'
import UserPage from '../components/user_page/UserPage'
import CurriculumPage from '../components/curriculum/CurriculumPage'
import Resources from '../components/ResourcesPage/ResourcesPage'

const AppRouter = () => {
	return(
		<BrowserRouter>
			<div>
				<Switch>
					<Route exact path="/" component={App} />
					<Route path="/signUp" component={SignUp} />
					<Route path="/about" component={About} />
					<Route path="/user" component={UserPage} exact={true}/>
					<Route path="/user/:id" component={CurriculumPage} exact={true}/>
					<Route path="/user/:id/resource" component={Resources} />
					<Route component={NotFound}  />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default AppRouter