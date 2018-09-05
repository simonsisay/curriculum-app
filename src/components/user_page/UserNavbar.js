import React, { Component } from 'react';
import { Fa, Badge, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';


class UserNavbar extends React.Component {
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
            <Router>
                <Navbar color="primary-color" dark expand="md"  className="user-navbar">
                    <NavbarBrand href="/user" className="brandName">
                        <strong>Masa Learn</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav right>
                      {/* any additional navs go here */}
                          <NavItem>
                            <Dropdown className="dropdown">
                                  <Badge color="purple" pill><span className="userName">Simon Sisay</span><Fa className="avatar" icon="user" size="2x" aria-hidden="true"/></Badge>
                               <DropdownToggle nav caret style={{display:"inline"}} className="dropdown-toggle">
                               </DropdownToggle>
                                <DropdownMenu className="drop-menu">
                                    <DropdownItem className="drop-item" href="#">Account</DropdownItem>
                                    <DropdownItem className="drop-item" href="#">Sign out</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}


export default UserNavbar