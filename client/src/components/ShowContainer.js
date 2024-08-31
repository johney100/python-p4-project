import {useEffect, useState } from "react";
import ShowCard from "./ShowCard"; // Import ShowCard component for individual show rendering

function ShowContainer({showData}){
     
    // Map show data to ShowCard components, ensuring unique keys
    const mappedShows  = showData.map((show) => (
        <ShowCard key={show.id} image={show.image} name={show.name} />
      ));

 // Render the ShowContainer component
    return (
        <div> 
        <h2>This is the Show Card</h2> 
        <h1>List your favorite shows</h1>
        <ul>
        {mappedShows}
        </ul>
        
        </div>
       );
}

export default ShowContainer;