import {useEffect, useState } from "react";
import ActorCard from "./ActorCard"; // Import ActorCard component for individual Actor rendering

function ActorContainer({}){
     
    // Map show data to ActorCard components, ensuring unique keys
   // const mappedShows  = showData.map((show) => (
   //     <ActorCard key={show.id} image={show.image} name={show.name} />
   //   ));
    

 // Render the ShowContainer component
    return (
        <div> 
        <h2>This is the Actor Card</h2> 
        <h1>List of Actors</h1>
        <ul>

        </ul>
        
        </div>
       );
}

export default ActorContainer;