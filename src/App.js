import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/posts/:id' element={<PostDetail/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
