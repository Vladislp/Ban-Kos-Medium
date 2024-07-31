import React from 'react';
import { MDBContainer, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { useAuth } from '../components/auth/authcontext';
import { useNavigate } from 'react-router-dom';

function Protected() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column align-items-center w-75">
      <MDBTypography tag='h1' className="mb-4">Welcome Back!</MDBTypography>
      <MDBTypography tag='h5' className="mb-4">
       You are protected
      </MDBTypography>

      <div className="d-flex flex-column align-items-center mt-4">
        <MDBBtn color="danger" onClick={handleLogout}>
          Logout
        </MDBBtn>
      </div>
    </MDBContainer>
  );
}

export default Protected;
