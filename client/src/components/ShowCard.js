
// Displaying individual show information
import React, { useState } from "react";

function ShowCard({ show, onDeleteShow }) {
    return (
      <div className="show-card">
        <h3>Show Name: {show.name}</h3>
        <p>Network: {show.network}</p>
        <button onClick={() => onDeleteShow(show.id)}>Delete</button>
        {/* Add other show details as needed */}
      </div>
    );
  }
  
  export default ShowCard;