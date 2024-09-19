import React, { useState } from "react";

function AddReview({ onAddReview, showId }) {
  const [newReview, setNewReview] = useState({
    comment: "",
    score: "",
    show_id: showId,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((r) => r.json())
      .then((newReview) => {
        onAddReview(newReview);
        setNewReview({ comment: "", score: "" });
      });
  };

  return (
    <form className="new-review" onSubmit={handleSubmit}>
      <input
        type="text"
        name="comment"
        autoComplete="off"
        value={newReview.comment}
        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
      />
      <input
        type="int"
        name="score"
        autoComplete="off"
        value={newReview.score}
        onChange={(e) => setNewReview({ ...newReview, score: e.target.value })}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default AddReview;