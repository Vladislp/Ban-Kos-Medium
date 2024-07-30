import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import RegisterPage from '../src/components/auth/register';
import Login from '../src/components/auth/login';
import Welcome from '../src/pages/Home';
import WelcomeLog from '../src/pages/Home-Login';
import { AuthProvider } from './components/auth/authcontext';

function App() {
  
  return (
    <AuthProvider>
      <Router>
      <div className='App'>
        <Navbar /> 
        <Routes>
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/welcomelog' element={<WelcomeLog />} />
          <Route exact path="/" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
