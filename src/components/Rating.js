import React, { useState } from 'react';

function Rating({ media }) {
  const [rating, setRating] = useState('');
  const [averageRating, setAverageRating] = useState(media.getAverageRating());

  const handleAddRating = () => {
    if (rating >= 1 && rating <= 5) {
      media.addRating(parseInt(rating));
      setAverageRating(media.getAverageRating());
    }
  };

  return (
    <div className="rating">
      <p>Average Rating: {averageRating}</p>
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
