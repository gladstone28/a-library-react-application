import React from 'react';
import CheckoutToggle from './CheckoutToggle';
import Rating from './Rating';

function MediaItem({ media }) {
  return (
    <div className="media-item">
      <h3>{media.title}</h3>
      <p>Type: {media.type}</p>
      {media.author && <p>Author: {media.author}</p>}
      {media.director && <p>Director: {media.director}</p>}
      {media.artist && <p>Artist: {media.artist}</p>}
      <p>Checked Out: {media.isCheckedOut ? 'Yes' : 'No'}</p>
      <CheckoutToggle media={media} />
      <Rating media={media} />
    </div>
  );
}

export default MediaItem;
