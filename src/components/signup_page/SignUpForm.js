import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody } from 'mdbreact';

class SignUpForm extends React.Component  {
  render() {
    return(
        <form className="Sign-up-form">
          <p className="h2 text-center pt-4 pb-2">Sign up</p>

          <div className="white-text">
            <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right" required/>
            <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right" required/>
            <Input label="Your password" icon="lock" group type="password" validate required/>
          </div>

          <div className="text-center ">
            <Button color="blue" type="submit">Register</Button>
          </div>

           <div className="footer pt-1  lighten-3">
              <Row className="d-flex justify-content-center">
                <p className="font-small white-text mb-2 pt-1">or Sign up with:</p>
              </Row>
              <Row className="d-flex justify-content-center">
                <a className="icon fa p-2 fb-ic"><Fa className="fa fa-facebook white-text fa-lg"> </Fa></a>
                <a className="icon fa p-2 gh-ic"><Fa className="fa fa-github white-text fa-lg"> </Fa></a>
                <a className="icon fa p-2 go-ic"><Fa className="fa fa-google white-text fa-lg"> </Fa></a>
              </Row>
            </div>

        </form>

    );
  }
};


export default SignUpForm;