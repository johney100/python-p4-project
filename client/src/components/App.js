import React, { useEffect, useState } from "react";
import '../index.css';
import ShowContainer from './ShowContainer';
import ActorContainer from './ActorContainer';
import UserContainer from './UserContainer';
import NavBar from './NavBar';
import {BrowserRouter, Switch, Routes, Route, Link} from "react-router-dom";





function App() {

  const [shows, setShows] = useState([]);
  const [actors, setActors] = useState([]);
  const [users, setUsers] = useState([]);
 

  useEffect(() => {
    const fetchShowData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/shows');
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchShowData();
  }, []);

  useEffect(() => {
    const fetchActorData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/actors');
        const data = await response.json();
        setActors(data);
      } catch (error) {
        console.error('Error fetching actors:', error);
      }
    };

    fetchActorData();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUserData();
  }, []);

 

  return (
    <div className="App"> 
    <h1>TV Show App</h1>
    <BrowserRouter>
      <NavBar />  {/* Pass search function to NavBar */}
      <Routes>
        <Route path="/" element={<ShowContainer shows={shows} />} />
        <Route path="/actors" element={<ActorContainer actors={actors}  />} />
        <Route path="/users" element={<UserContainer users={users} />} />
        {/* Add more routes here */}
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