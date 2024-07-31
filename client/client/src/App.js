import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import RegisterPage from '../src/components/auth/register';
import Login from '../src/components/auth/login';
import Welcome from '../src/pages/Home';
import WelcomeLog from '../src/pages/Home-Login';
import { AuthProvider } from './components/auth/authcontext';
import Protected from './pages/Home-Protected';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateStatus = () => {
    setIsLoggedIn((prev) => !prev);
  };

  console.log(isLoggedIn)
  
  return (
    <AuthProvider>
      <Router>
        <div className='App'>
          <Navbar /> 
          <Routes>
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<Login updateStatus={updateStatus} />} />
            <Route path='/welcomelog' element={isLoggedIn ? <Protected /> : <WelcomeLog/>} />
            <Route path='/protected' element={isLoggedIn ? <Protected /> : <Navigate to='/login' />} />
            <Route exact path="/" element={<Welcome />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;