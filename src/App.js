import React, { useState } from 'react';
import "./style.css";
const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // Function to get the number of days in a specific month
  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  // Function to generate an array of day numbers for the current month
  const generateDaysArray = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  };

  // Function to handle previous month button click
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  // Function to handle next month button click
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePrevMonth}>Previous Month</button>
        <h2>{currentYear} - {currentMonth + 1}</h2>
        <button onClick={handleNextMonth}>Next Month</button>
      </div>
      <div className="days">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="dates">
        {generateDaysArray(currentYear, currentMonth).map(day => (
          <div key={day}>{day}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
