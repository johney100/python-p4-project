import {useEffect, useState } from "react";
import ShowCard from "./ShowCard"; // Import ShowCard component for individual show rendering

function ShowContainer({shows}) {
    return (
      <div>
        <h2>This is the Show Card</h2>
        <h1>List your favorite shows</h1>
        <ul>
          {shows.map((show) => (
            <li key={show.id}>
              <ShowCard show={show} /> {/* Pass show data to ShowCard */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  

export default ShowContainer;