import React, { useState } from "react";
// Displaying individual show information

function ActorCard({ actor }) {
    return (
      <div className="actor-card">
        <h3>{actor.name}</h3>
        <p>Age: {actor.age}</p>
        {/* Add other show details as needed */}
      </div>
    );
  }
  


export default ActorCard;