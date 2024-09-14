
// Displaying individual show information
import React, { useState } from "react";

function ShowCard({ show }) {
    return (
      <div className="show-card">
        <h3>{show.name}</h3>
        <p>Network: {show.network}</p>
        {/* Add other show details as needed */}
      </div>
    );
  }
  
  export default ShowCard;