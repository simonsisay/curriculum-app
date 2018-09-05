import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import { Link } from 'react-router-dom'
import UserPage from '../user_page/UserPage'

class LoginForm extends React.Component  {
    constructor(props){
      super(props)
      this.state = {
        forgotPassword:false
      }
    }
    

  forgotPassword = () => {
    this.setState({forgotPassword:!this.state.forgotPassword})
  }


  render() {
    if(this.state.forgotPassword == false){
      return(
        <Container className="login-form">
          <Row>
            <Col md="6">
              <form>
                <h2 className="text-center mb-2 login-header">Sign in</h2>
                <div className="white-text">
                  <Input className="input" label="Email" icon="envelope" group type="email" validate error="wrong" success="right" />
                  <Input className="input" label="Password" icon="lock" group type="password" validate/>
                </div>
                <div className="login-button text-center">
                  <Button className="btn-blue" ><Link to="/user">Sign in</Link></Button>
                </div>
                <div className="forgot-pass">
                  <p>Not a memeber <Link to="/signUp">Sign up</Link></p>
                  <a onClick={this.forgotPassword}>Forgot password ?</a>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      );
    }
    else {
      return(
        <div className="login-form">
          <div className="white-text">
              <Input className="input" label="Enter your email" icon="envelope" group type="email" validate error="wrong" success="right" />
          </div>
          <div className="login-button text-center">
             <Button className="btn-blue" onClick={this.forgotPassword}>Send email</Button>
          </div>
        </div>
      )
    }
  }
};

export default LoginForm;