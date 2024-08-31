import React, { useEffect, useState } from "react";
import '../App.css';
import ShowContainer from './ShowContainer';
import ActorContainer from './ActorContainer';
import NavBar from './NavBar';
import AddShow from './AddShow';
import {BrowserRouter, Switch, Routes, Route, Link} from "react-router-dom";



function App() {
  return (
    <div className="App"> 
    <h1>TV Show App</h1>
      <BrowserRouter> 
     
      <Routes>
        
        
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;


// <Route path="/addshow" element={<Form addShows={addShows} />}/>
// <Route path="/" element={<Home />}/>
//<Route path="/shows" element={<ShowContainer showData={showData} />} />
// <NavBar onChangePage={setPage}/>