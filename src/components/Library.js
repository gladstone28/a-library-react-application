import React, { useState } from 'react';
import MediaList from './MediaList';
import AddMediaForm from './AddMediaForm';

function Library() {
  const [mediaItems, setMediaItems] = useState([]);

  const addMediaItem = (newItem) => {
    setMediaItems([...mediaItems, newItem]);
  };

  return (
    <div className="library">
      <h2>Library Collection</h2>
      <AddMediaForm addMediaItem={addMediaItem} />
      <MediaList mediaItems={mediaItems} />
    </div>
  );
}

export default Library;
