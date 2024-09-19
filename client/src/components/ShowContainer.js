import React, { useState, useEffect } from "react";
import ShowCard from "./ShowCard";
import ReviewCard from "./ReviewCard";
import AddShow from "./AddShow";
import AddReview from "./AddReview";
import UserCard from "./UserCard";

function ShowContainer({ shows }) {
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/reviews");
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviewsData();
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

  const handleAddShow = (newShow) => {
    // Handle newly created show (e.g., update shows state)
    console.log("New show added:", newShow);
  };

  const handleAddReview = (showId, newReview) => {
    // Handle newly created review (e.g., update reviews state)
    console.log("New review added for show", showId, newReview);
  };



  return (
    <div>
      <h2>This is the Show Card</h2>
      <h1>Add a new show</h1>
      <AddShow onAddShow={handleAddShow} />
      <ul>
        {shows.map((show) => (
          <li key={show.id}>
            <ShowCard show={show} />
            <ReviewCard review={reviews.find((review) => review.show_id === show.id)} showId = {show.id} onAddReview={handleAddReview} />
            <AddReview onAddReview={handleAddReview} showId = {show.id}/>
          </li>
        ))}
      </ul>
      <ul>
      {users.map((user) => (
          <li key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
        </ul>
    </div>
  );
}

export default ShowContainer;