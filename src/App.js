import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/home' exact element={<HomePage />} />
          <Route path='/create_account' exact element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
