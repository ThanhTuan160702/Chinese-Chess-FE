import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Public from './pages/public/Public';
import Home from './pages/public/Home1';
import path from './utils/path';

function App() {

  return (
    <div className="font-main w-full min-h-screen relative bg-black flex items-center justify-center">
      <Routes>
          <Route path={path.HOME} element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
