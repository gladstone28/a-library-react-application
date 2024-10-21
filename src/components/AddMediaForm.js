import React, { useState } from 'react';

function AddMediaForm({ addMediaItem }) {
  const [type, setType] = useState('Book');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [director, setDirector] = useState('');
  const [artist, setArtist] = useState('');
  const [pages, setPages] = useState('');
  const [runTime, setRunTime] = useState('');
  const [songs, setSongs] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMedia = { title, type, isCheckedOut: false, ratings: [] };
    if (type === 'Book') {
      newMedia.author = author;
      newMedia.pages = pages;
    } else if (type === 'Movie') {
      newMedia.director = director;
      newMedia.runTime = runTime;
    } else if (type === 'CD') {
      newMedia.artist = artist;
      newMedia.songs = songs.split(',').map(song => song.trim());
    }
    addMediaItem(newMedia);
    setTitle('');
    setAuthor('');
    setDirector('');
    setArtist('');
    setPages('');
    setRunTime('');
    setSongs('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-media-form">
      <label htmlFor="type">Media Type:</label>
      <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Book">Book</option>
        <option value="Movie">Movie</option>
        <option value="CD">CD</option>
      </select>

      <label htmlFor="title">Title:</label>
      <input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        aria-label="Enter the title of the media"
      />

      {type === 'Book' && (
        <>
          <label htmlFor="author">Author:</label>
          <input
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            aria-label="Enter the author of the book"
          />
          <label htmlFor="pages">Pages:</label>
          <input
            id="pages"
            type="number"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
            aria-label="Enter the number of pages"
          />
        </>
      )}

      {type === 'Movie' && (
        <>
          <label htmlFor="director">Director:</label>
          <input
            id="director"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            required
            aria-label="Enter the director of the movie"
          />
          <label htmlFor="runTime">Run Time (minutes):</label>
          <input
            id="runTime"
            type="number"
            value={runTime}
            onChange={(e) => setRunTime(e.target.value)}
            aria-label="Enter the runtime of the movie"
          />
        </>
      )}

      {type === 'CD' && (
        <>
          <label htmlFor="artist">Artist:</label>
          <input
            id="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
            aria-label="Enter the artist of the CD"
          />
          <label htmlFor="songs">Songs (comma-separated):</label>
          <input
            id="songs"
            value={songs}
            onChange={(e) => setSongs(e.target.value)}
            aria-label="Enter the songs of the CD"
          />
        </>
      )}

      <button type="submit">Add Media</button>
    </form>
  );
}

export default AddMediaForm;
