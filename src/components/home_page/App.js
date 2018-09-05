import React, { Component } from 'react'
import LoginForm from './LoginForm'
import Brand from './Brand'
import NavBar from '../common/Navbar'
import Particles from 'react-particles-js'
import './home.css'


const particlesOptions = {
  particles: {
     number:{
        value:20,
        density:{
          enable:false,
          value_area:200
        }
      }
    }
}

class App extends Component {



  render(){
    return (
      <div className="main">
        <div className="intro-page">
          <Particles className="particles" params={particlesOptions} />
          <NavBar linkTo={'/signUp'} signWhat={'Sign up'}/>
          <div className="main-container">
            <Brand />
            <LoginForm />
          </div>
        </div>
      </div>
    )
  }
}

export default App