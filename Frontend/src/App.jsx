import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddLead from './pages/AddLead';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <span className="brand">LeadCRM</span>
        <div className="nav-links">
          <Link to="/">Dashboard</Link>
          <Link to="/add">+ Add Lead</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddLead />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;