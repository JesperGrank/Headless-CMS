import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import PostDetail from './pages/PostDetail';
import AboutMe from './pages/AboutMe'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='about-me' element={<AboutMe/>}></Route>
        <Route path='/posts/:id' element={<PostDetail/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
