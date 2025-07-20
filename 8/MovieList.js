import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

const MovieList = ({ movies }) => {
    const [searchQuery, setSearchQuery] = useState('');

    // Function to handle search input change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filter movies based on search query
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="movie-list-container">
            <h1 className="movie-list-heading">Welcome to Movie Booking Portal</h1>
            <input
                type="text"
                placeholder="Search for a movie..."
                className="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <div className="movie-list">
                {filteredMovies.map(movie => (
                    <div key={movie.id} className="movie-card">
                        <Link to={`/movie/${movie.id}`}>
                            <img src={movie.image} alt={movie.title} />
                            <h3>{movie.title}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;

