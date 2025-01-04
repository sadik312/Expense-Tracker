import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import "./styles/App.css";
import LandingPage from "./pages/LandingPage";
import Dashboard from './pages/Dashboard';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
    
  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route
        path='/dashboard'
        element={isAuthenticated ? <Dashboard /> : <Navigate to='/' />}
        />
      </Routes>
    </Router>
  );
}

export default App;