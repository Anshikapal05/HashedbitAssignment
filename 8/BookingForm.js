// src/components/BookingForm.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = ({ movies }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });

    const selectedMovie = movies.find(movie => movie.id === parseInt(id));

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookingId = Math.floor(Math.random() * 10000);
        navigate(`/confirmation/${bookingId}`, { state: { ...formData, movie: selectedMovie } });
    };

    return (
        <div className="booking-form-container">
            <form className="booking-form" onSubmit={handleSubmit}>
                <h2>Book Movie: {selectedMovie?.title}</h2>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="tel" name="mobile" placeholder="Mobile" onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BookingForm;
