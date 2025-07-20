// src/components/BookingConfirmation.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './BookingConfirmation.css';

// src/components/BookingConfirmation.js
const BookingConfirmation = () => {
    const location = useLocation();
    const { state } = location;
    const bookingId = location.pathname.split('/').pop();

    return (
        <div className="booking-confirmation-container">
            <div className="booking-confirmation-card">
                <h2>Booking Confirmed!</h2>
                <p>Booking ID: <strong>{bookingId}</strong></p>
                <p>Name: <strong>{state.name}</strong></p>
                <p>Email: <strong>{state.email}</strong></p>
                <p>Mobile: <strong>{state.mobile}</strong></p>
            </div>
        </div>
    );
};

export default BookingConfirmation;
