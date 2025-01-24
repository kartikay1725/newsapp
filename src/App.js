import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import{
    BrowserRouter as Router,
    Routes,Route
} from "react-router-dom"
import LoadingBar from "react-top-loading-bar";


export default function App() {

const apikey = process.env.REACT_APP_NEWS_API;
const[progress,setProgress]=useState(0)

    return (
      <>
        <Router>
          <Navbar/>
          <LoadingBar
          height={4}
            color="#f11946"
            progress={progress}
            
          />
          
            <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apikey={apikey}  key="top" pagesize={6} country="in" category="top"/>}></Route>
          <Route exact path='/business' element={<News setProgress={setProgress} apikey={apikey}  key="business" pagesize={6} country="in" category="business"/>}></Route>
          <Route exact path='/crime' element={<News setProgress={setProgress} apikey={apikey}  key="crime" pagesize={6} country="in" category="crime"/>}></Route>
          <Route exact path='/domestic' element={<News setProgress={setProgress} apikey={apikey}  key="domestic" pagesize={6} country="in" category="domestic"/>}></Route>
          <Route exact path='/education' element={<News setProgress={setProgress} apikey={apikey}  key="education" pagesize={6} country="in" category="education"/>}></Route>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apikey={apikey}  key="entartainment" pagesize={6} country="in" category="entertainment"/>}></Route>
          <Route exact path='/environment' element={<News setProgress={setProgress} apikey={apikey}  key="enviorment" pagesize={6} country="in" category="environment"/>}></Route>
          <Route exact path='/food' element={<News setProgress={setProgress} apikey={apikey}  key="food" pagesize={6} country="in" category="food"/>}></Route>
          <Route exact path='/health' element={<News setProgress={setProgress} apikey={apikey}  key="health" pagesize={6} country="in" category="health"/>}></Route>
          <Route exact path='/lifestyle' element={<News setProgress={setProgress} apikey={apikey}  key="lifestyle" pagesize={6} country="in" category="lifestyle"/>}></Route>
          <Route exact path='/politics' element={<News setProgress={setProgress} apikey={apikey}  key="politics" pagesize={6} country="in" category="politics"/>}></Route>
          <Route exact path='/science' element={<News setProgress={setProgress} apikey={apikey}  key="science" pagesize={6} country="in" category="science"/>}></Route>
          <Route exact path='/sports' element={<News setProgress={setProgress} apikey={apikey}  key="sports" pagesize={6} country="in" category="sports"/>}></Route>
          <Route exact path='/technology' element={<News setProgress={setProgress} apikey={apikey}  key="technology" pagesize={6} country="in" category="technology"/>}></Route>
          <Route exact path='/tourism' element={<News setProgress={setProgress} apikey={apikey}  key="tourism" pagesize={6} country="in" category="tourism"/>}></Route>
          <Route exact path='/world' element={<News setProgress={setProgress} apikey={apikey}  key="world" pagesize={6} country="in" category="world"/>}></Route>
          <Route exact path='/other' element={<News setProgress={setProgress} apikey={apikey}  key="other" pagesize={6} country="in" category="other"/>}></Route>
          </Routes>
          </Router>
          
      </>
    )
}






