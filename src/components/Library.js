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
      type: 'Book',
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      pages: 310,
      isCheckedOut: false,
      ratings: [5, 5, 4]
    },
    {
      type: 'Book',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      pages: 324,
      isCheckedOut: false,
      ratings: [4, 5, 5]
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
      type: 'Movie',
      title: 'Inception',
      director: 'Christopher Nolan',
      runTime: 148,
      isCheckedOut: false,
      ratings: [5, 4, 5]
    },
    {
      type: 'Movie',
      title: 'The Matrix',
      director: 'Lana Wachowski, Lilly Wachowski',
      runTime: 136,
      isCheckedOut: false,
      ratings: [5, 5, 4]
    },
    {
      type: 'CD',
      title: 'Abbey Road',
      artist: 'The Beatles',
      songs: ['Come Together', 'Something'],
      isCheckedOut: false,
      ratings: [5, 4]
    },
    {
      type: 'CD',
      title: 'Thriller',
      artist: 'Michael Jackson',
      songs: ['Thriller', 'Beat It', 'Billie Jean'],
      isCheckedOut: false,
      ratings: [5, 5, 5]
    },
    {
      type: 'CD',
      title: 'Back in Black',
      artist: 'AC/DC',
      songs: ['Back in Black', 'You Shook Me All Night Long'],
      isCheckedOut: false,
      ratings: [4, 5, 5]
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
