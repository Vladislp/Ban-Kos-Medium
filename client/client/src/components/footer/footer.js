import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with me on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/vlad.paskevits' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://www.linkedin.com/in/vladislav-pa%C5%A1kevit%C5%A1-295b7823a/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://github.com/Vladislp' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <a className='text-uppercase fw-bold mb-4' href='https://vp-web-development-showcase.netlify.app/'>
                <MDBIcon icon="gem" className="me-3" />
                Vladislav Paskevits
              </a>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='https://react.dev/' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='https://www.mongodb.com/' className='text-reset'>
                  MongoDB
                </a>
              </p>
              <p>
                <a href='https://nodejs.org/en' className='text-reset'>
                  Node.js
                </a>
              </p>
              <p>
                <a href='https://expressjs.com/en/starter/installing.html' className='text-reset'>
                  Express.js
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  This
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Looks
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Better
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Here
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Tallinn, Estonia
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                vladpaskevits27@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +372 5806 6561
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +None 
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold'>
          Vladislav
        </a>
      </div>
    </MDBFooter>
  );
}
