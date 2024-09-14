
// Displaying individual show information
import React, { useState } from "react";

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      {review ? (  // Check if review exists before accessing properties
        <>
          <h4>Review: "{review.comment}"</h4>
          <p>Score: {review.score}/4</p>
          {/* Add other show details as needed */}
        </>
      ) : (
        <p>No review available for this show.</p>
      )}
    </div>
  );
}
  
  export default ReviewCard;