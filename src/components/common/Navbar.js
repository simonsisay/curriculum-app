import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
     }
    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <div>
              <Navbar className="navbar" color="dark" dark expand="md" scrolling>
                  <NavbarBrand href="/">
                      <strong className="brandName">{this.props.brandName}</strong>
                  </NavbarBrand>
                  { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                  <Collapse isOpen = { this.state.collapse } navbar>
                      <NavbarNav right>
                        <NavItem>
                            <NavLink to="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={this.props.linkTo}>{this.props.signWhat}</NavLink>
                        </NavItem>
                      </NavbarNav>
                   </Collapse>
             </Navbar>
           </div>
    		)
    }
}

export default NavBar