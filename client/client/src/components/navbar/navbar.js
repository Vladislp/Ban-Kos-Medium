import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { useAuth } from '../auth/authcontext'; // Import your auth context

export default function Navbar() {
  const [openBasic, setOpenBasic] = useState(false);
  const { isAuthenticated, logout } = useAuth(); // Access auth state and functions

  const handleLogout = () => {
    logout(); // Call the logout function from the context
  };

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            {/* Always show Home link */}
            <MDBNavbarItem>
              <MDBNavbarLink href={isAuthenticated ? '/welcomelog' : '/'}>Home</MDBNavbarLink>
            </MDBNavbarItem>
            {!isAuthenticated ? (
              <>
                {/* Show Register and Login links if not authenticated */}
                <MDBNavbarItem>
                  <MDBNavbarLink href='/register'>Register</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/login'>Login</MDBNavbarLink>
                </MDBNavbarItem>
              </>
            ) : (
              <>
                {/* Show Logout link if authenticated */}
                <MDBNavbarItem>
                  <MDBNavbarLink href='#' onClick={handleLogout}>Logout</MDBNavbarLink>
                </MDBNavbarItem>
              </>
            )}
          </MDBNavbarNav>   
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
