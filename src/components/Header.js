import React from 'react'
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const user = JSON.parse(localStorage.getItem('user'));

const Header = () => (
  <Navbar bsStyle="inverse">
    <Navbar.Header>
      <Navbar.Brand>
        Sample application
       
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
)

export default Header