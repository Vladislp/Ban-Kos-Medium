import React from 'react';
import { MDBContainer, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';

function WelcomeLog() {
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column align-items-center w-75">
      <MDBTypography tag='h1' className="mb-4">Welcome Back!</MDBTypography>
      <MDBTypography tag='h5' className="mb-4">
        You are in the system
      </MDBTypography>

      <div className="d-flex flex-column align-items-center mt-4">
        <MDBBtn color="primary" className="mb-2">
          Go to Profile
        </MDBBtn>
        <MDBBtn color="danger" >
          Logout
        </MDBBtn>
      </div>
    </MDBContainer>
  );
}

export default WelcomeLog;
