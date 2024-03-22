import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AccessForm from './components/AccessForm/AccessForm';
import './Main.css';

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<AccessForm />} />
      </Routes>
    </div>
  );
};

export default Main;
