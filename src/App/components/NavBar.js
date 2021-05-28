import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { signInUser, signOutUser } from '../../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="nav-bar" color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <Link className="nav-link" to='/'>Home</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/bio'>Bio</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/projects'>projects</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/technologies'>Technologies</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link"to='/contact'>Contact Me</Link>
            </NavItem>
          </Nav>
          <NavItem>
          {
                  user
                    ? <Button color="success" onClick={signOutUser}>Sign Out</Button>
                    : <Button color="success" onClick={signInUser}>Sign In</Button>
               }
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
