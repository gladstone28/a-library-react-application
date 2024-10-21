import React, { useState } from 'react';
import MediaList from './MediaList';

function Library({ filter }) {
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
      type: 'Book',
      title: '1984',
      author: 'George Orwell',
      pages: 328,
      isCheckedOut: false,
      ratings: [5, 5, 4]
    },
    {
      type: 'Book',
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      pages: 277,
      isCheckedOut: false,
      ratings: [4, 5, 4]
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
      type: 'Movie',
      title: 'The Godfather',
      director: 'Francis Ford Coppola',
      runTime: 175,
      isCheckedOut: false,
      ratings: [5, 5, 5]
    },
    {
      type: 'Movie',
      title: 'Forrest Gump',
      director: 'Robert Zemeckis',
      runTime: 142,
      isCheckedOut: false,
      ratings: [5, 4, 5]
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
    },
    {
      type: 'CD',
      title: 'The Dark Side of the Moon',
      artist: 'Pink Floyd',
      songs: ['Speak to Me', 'Breathe', 'Time'],
      isCheckedOut: false,
      ratings: [5, 5, 4]
    },
    {
      type: 'CD',
      title: 'Hotel California',
      artist: 'Eagles',
      songs: ['Hotel California', 'New Kid in Town', 'Life in the Fast Lane'],
      isCheckedOut: false,
      ratings: [5, 4, 5]
    }
  ]);

  // Filter media items based on the selected filter
  const filteredItems = filter === 'All' ? mediaItems : mediaItems.filter(item => item.type === filter);

  return (
    <div className="library">
      <h2>Library Collection ({filter})</h2>
      <MediaList mediaItems={filteredItems} />
    </div>
  );
}

export default Library;
