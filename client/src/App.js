import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing';
import UnAuthApp from './pages/UnAuthApp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignUp2 from './components/SignUp2';
import SignUp3 from './components/SignUp3';
import Login from './pages/Login';
import AuthApp from './pages/AuthApp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/app" element={<UnAuthApp />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path="/signup/2" element={<SignUp2 />} />
          <Route path="/signup/3" element={<SignUp3 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app/connected" element={<AuthApp />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
