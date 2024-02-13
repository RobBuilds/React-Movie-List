import React, { useEffect, useState } from 'react';
export default function AllMovies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'http://localhost:8080/moviedata' with your actual API endpoint
        const response = await fetch('http://localhost:8080/moviedata');
        const data = await response.json();
        // Extracting image URLs from each item in the dataset
        const movieUrl = data.map(item => item.image.original);
        setMovies(movieUrl);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="image-container">
        {movies.map((movieUrl, index) => (
          <img key={index} src={movieUrl} alt={`Movie ${index}`} />
        ))}
      </div>
    </div>
  );
};