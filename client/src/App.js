import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing';
import UnAuthApp from './pages/UnAuthApp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/app" element={<UnAuthApp />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
