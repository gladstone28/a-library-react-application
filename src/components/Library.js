import React, { useState } from 'react';
import MediaList from './MediaList';

function Library() {
  // Hardcoded media items
  const [mediaItems] = useState([
    {
      type: 'Book',
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      pages: 500,
      isCheckedOut: false,
      ratings: [5, 4]
    },
    {
      type: 'Movie',
      title: 'Jurassic Park',
      director: 'Steven Spielberg',
      runTime: 127,
      isCheckedOut: false,
      ratings: [5]
    },
    {
      type: 'CD',
      title: 'Abbey Road',
      artist: 'The Beatles',
      songs: ['Come Together', 'Something'],
      isCheckedOut: false,
      ratings: [5, 4]
    }
  ]);

  return (
    <div className="library">
      <h2>Library Collection</h2>
      <MediaList mediaItems={mediaItems} />
    </div>
  );
}

export default Library;
