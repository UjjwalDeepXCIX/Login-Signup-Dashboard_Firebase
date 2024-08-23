import "./App.css";
import { ColorModeProvider } from "./Pages/theme";
import Dashboard from "./Pages/Dashboard/dashboard";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Signup from './Pages/SignUp/SignUp';
import Logout from './Pages/Logout/Logout'; // Import the Logout component

const App = () => {
  return (
    <ColorModeProvider>
      <BrowserRouter>
        <div className="app">
          <main className="main-content">
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/logout" element={<Logout />} /> {/* Add the Logout route */}
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ColorModeProvider>
  );
}

export default App;
