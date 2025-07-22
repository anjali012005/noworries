import React, { useState } from 'react';
import './BookDoctor.css';

const BookDoctor = () => {
  const doctorName = "Dr. Vivek Yadav"; // fixed doctor
  const [patientName, setPatientName] = useState('');
  const [tokenNumber, setTokenNumber] = useState(1);
  const [confirmation, setConfirmation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!patientName) {
      setConfirmation("Please enter your name.");
      return;
    }

    setConfirmation(
      `Booking confirmed for ${patientName} with ${doctorName}. Your token number is ${tokenNumber}.`
    );

    setTokenNumber(prev => prev + 1);
    setPatientName('');
  };

  return (
    <div className="book-doctor-container">
      <h2>Book Appointment with {doctorName}</h2>
      <form onSubmit={handleSubmit}>
        <label>Patient Name:</label>
        <input
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />
        <button type="submit">Book Now</button>
      </form>

      {confirmation && <p className="message">{confirmation}</p>}
    </div>
  );
};

export default BookDoctor;
