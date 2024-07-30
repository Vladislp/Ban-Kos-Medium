import React, { useState } from 'react';
import axios from 'axios';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/authcontext'; // Import useAuth

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Sending login request with:', { email, password });
      const response = await axios.post('http://localhost:3000/users/login', {
        email,
        password
      });

      setMessage(response.data.message);

      // Store the token and update auth context
      login(response.data.token);
      alert("Login successful");

      // Redirect to the welcome page after successful login
      navigate('/welcomelog');

      console.log('Login successful, token received:', response.data.token);
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error);
      setMessage(error.response ? error.response.data.message : 'An error occurred');
    }
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <form onSubmit={handleSubmit}>
        <MDBInput
          wrapperClass='mb-4'
          label='Email address'
          id='form1'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MDBInput
          wrapperClass='mb-4'
          label='Password'
          id='form2'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
          <a href="#!">Forgot password?</a>
        </div>

        <MDBBtn className="mb-4" type="submit">Sign in</MDBBtn>
      </form>
    </MDBContainer>
  );
}

export default Login;
