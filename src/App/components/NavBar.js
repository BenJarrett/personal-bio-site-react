import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to='/bio'>BIO</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/projects'>PROJECTS</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/technologies'>TECHNOLOGIES</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link"to='/contact'>CONTACT INFORMATION</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
