import React, { useState, useEffect } from 'react';

function Rating({ media }) {
  const [rating, setRating] = useState('');
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    // Calculate the average rating based on the ratings array
    if (media.ratings.length > 0) {
      const sum = media.ratings.reduce((acc, curr) => acc + curr, 0);
      const avg = sum / media.ratings.length;
      setAverageRating(avg);
    } else {
      setAverageRating(0);
    }
  }, [media.ratings]);

  const handleAddRating = () => {
    if (rating >= 1 && rating <= 5) {
      media.ratings.push(parseInt(rating));  // Add rating to the media object
      const sum = media.ratings.reduce((acc, curr) => acc + curr, 0);
      const avg = sum / media.ratings.length;
      setAverageRating(avg);  // Update the average rating
    }
  };

  return (
    <div className="rating">
      <p>Average Rating: {averageRating.toFixed(1)}</p>
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="1"
        max="5"
        aria-label="Rate the media item between 1 and 5"
      />
      <button onClick={handleAddRating}>Add Rating</button>
    </div>
  );
}

export default Rating;
