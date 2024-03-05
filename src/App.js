import React, { useState } from 'react'
import {Routes,Route} from "react-router-dom";
import Home from './Pages/Home';
import Abstract from './Pages/Abstract';
import KeyLinkage from './Pages/KeyLinkage';
import "./App.css"

function App() {
  const[linkagePosts , setLinkagePosts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [apiData, setApiData] = useState({});
  
  return (
    <div className='main-bg h-[100vh] w-[100vw]'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/abstract' element={<Abstract linkagePosts={linkagePosts} setLinkagePosts={setLinkagePosts} filteredData={filteredData} setFilteredData={setFilteredData} apiData={apiData} setApiData={setApiData}/>} />
        <Route path='/keylinkage' element={<KeyLinkage linkagePosts={linkagePosts} filteredData={filteredData} apiData={apiData}/>}/>
      </Routes>
    </div>
  )
}

export default App
