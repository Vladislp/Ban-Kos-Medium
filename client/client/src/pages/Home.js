import React from 'react';
import { MDBContainer, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';

function Welcome() {
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column align-items-center w-75">
      <MDBTypography tag='h1' className="mb-4">Welcome Back!</MDBTypography>
      <MDBTypography tag='h5' className="mb-4">
        We're thrilled to have you here. Feel free to explore our features and make the most of your experience.
      </MDBTypography>

      <div className="d-flex flex-column align-items-center mt-4">
        <MDBBtn href='/login' >
          Login
        </MDBBtn>
      </div>
    </MDBContainer>
  );
}

export default Welcome;
