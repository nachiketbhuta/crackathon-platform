import React, { useState } from "react";

import { Link } from 'react-router-dom';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
     } from 'reactstrap';

import Style from 'style-it';
  

export default function NavBar() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <Style>
      {`  
        .logo:hover {
          text-decoration: none !important;
          cursor: none; 
        }
      `}
    </Style>
    ,
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand><Link className="logo" to="/" className="text-white">Coditor</Link></NavbarBrand>
        <NavbarToggler onClick={() => setisOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="text-white">
              <NavLink><Link to="/editor" className="text-white">Editor</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/login" className="text-white">Login</Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
