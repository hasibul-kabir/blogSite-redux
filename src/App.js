import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navigation/Navbar';
import Home from './Pages/Home';
import Post from './Pages/Post';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts/:postId' element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
