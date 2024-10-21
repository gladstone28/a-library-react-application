import React from 'react';
import MediaItem from './MediaItem';

function MediaList({ mediaItems }) {
  return (
    <div className="media-list">
      {mediaItems.map((media, index) => (
        <MediaItem key={index} media={media} />
      ))}
    </div>
  );
}

export default MediaList;
