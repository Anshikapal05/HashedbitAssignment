// src/components/MovieDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = ({ movies }) => {
    const { id } = useParams();
    const movie = movies.find(m => m.id === parseInt(id));

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-details-container">
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-description">{movie.description}</p>
            <Link to={`/book/${id}`}>
                <button className="book-seat-button">Book Seat</button>
            </Link>
        </div>
    );
};

export default MovieDetails;
