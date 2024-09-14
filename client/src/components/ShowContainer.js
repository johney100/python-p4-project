import {useEffect, useState } from "react";
import ShowCard from "./ShowCard"; // Import ShowCard component for individual show rendering
import ReviewCard from "./ReviewCard";

function ShowContainer({shows}) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviewsData = async () => {
          try {
            const response = await fetch('http://127.0.0.1:5000/reviews');
            const data = await response.json();
            setReviews(data);
          } catch (error) {
            console.error('Error fetching reviews:', error);
          }
        };
    
      fetchReviewsData();
      }, [shows]);

    return (
      <div>
        <h2>This is the Show Card</h2>
        <h1>List your favorite shows</h1>
        <ul>
          {shows.map((show) => (
            <li key={show.id}>
              <ShowCard show={show} /> {/* Pass show data to ShowCard */}
              <ReviewCard review={reviews.find((review) => review.show_id === show.id)} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  

export default ShowContainer;