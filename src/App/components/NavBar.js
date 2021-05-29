import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { signInUser, signOutUser } from '../../helpers/auth';

const NavBar = ({ admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => {
  <>
   <NavItem>
    <Link className="nav-link" to='/add-projects'>Add New Project</Link>
   </NavItem>
  </>;
  };
  console.warn(admin);
  return (
<div>
      <Navbar className="nav-bar" color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          { admin !== null && authenticated()}
            <NavItem>
              <Link className="nav-link" to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/bio">Bio</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/projects">Projects</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/technologies">Technologies</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/contact">Contact Me</Link>
            </NavItem>
            {
              admin !== null
              && <NavItem>
                {
                  admin
                    ? <Button color='danger' onClick={signOutUser}>Log Out</Button>
                    : <Button color='danger' onClick={signInUser}>Sign In</Button>
                }
              </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  admin: PropTypes.any
};

export default NavBar;
