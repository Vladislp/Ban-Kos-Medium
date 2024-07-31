import React from 'react';
import { MDBContainer, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { useAuth } from '../components/auth/authcontext'; // Import useAuth
import { useNavigate } from 'react-router-dom';

function WelcomeLog() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login page after logout
  };

  const handleNavigateToProtected = () => {
    navigate('/protected');
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column align-items-center w-75">
      <MDBTypography tag='h1' className="mb-4">Welcome Back!</MDBTypography>
      <MDBTypography tag='h5' className="mb-4">
        You are in the system
      </MDBTypography>

      <div className="d-flex  align-items-center mt-4">
        
        <MDBBtn color="danger" onClick={handleNavigateToProtected}>
          Protected route
        </MDBBtn>

        <MDBBtn color="danger" onClick={handleLogout}>
          Logout
        </MDBBtn>
      </div>
    </MDBContainer>
  );
}

export default WelcomeLog;
