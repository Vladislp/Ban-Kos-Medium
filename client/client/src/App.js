import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar'
import RegisterPage from '../src/components/auth/register'


function App() {
  
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/register' component={RegisterPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
