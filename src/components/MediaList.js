import React from 'react';
import MediaItem from './MediaItem';

function MediaList({ mediaItems }) {
  return (
    <div className="media-list">
      {mediaItems.length > 0 ? (
        mediaItems.map((media, index) => (
          <MediaItem key={index} media={media} />
        ))
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
}

export default MediaList;
