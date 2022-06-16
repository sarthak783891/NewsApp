
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
 
  
  const apiKey = process.env.REACT_APP_NEWS_API
  const pageSize = 5;
 
  return (<>
  <BrowserRouter>
      <Navbar/>
  
      <Routes>
      <Route path='/' element={<News key="general" api= {apiKey} pageSize={pageSize} category="general"/>}></Route> 
      <Route path='/business' element={<News key="business" api= {apiKey} pageSize={pageSize} category="business"/>}></Route> 
      <Route path='/entertainment' element={<News key="entertainment" api= {apiKey} pageSize={pageSize} category="entertainment"/>}></Route> 
      <Route path='/health' element={<News key="health" api= {apiKey} pageSize={pageSize} category="health"/>}></Route> 
      <Route path='/science' element={<News key="science" api= {apiKey} pageSize={pageSize} category="science"/>}></Route> 
      <Route path='/sports' element={<News key="sports" api= {apiKey} pageSize={pageSize} category="sports"/>}></Route> 
      <Route path='/technology' element={<News key="technology" api= {apiKey} pageSize={pageSize} category="technology"/>}></Route> 
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
