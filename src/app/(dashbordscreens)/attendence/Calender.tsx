'use client'
import React, { useState, useEffect } from 'react';
import './Calender.css'; // Import the CSS file

// Helper function to format dates
const formatDate = (year: number, month: number, day: number) => {
  return `${year}-${month + 1}-${day}`;
};

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);
  const [punchTimes, setPunchTimes] = useState<{ [key: string]: { punchIn: string; punchOut: string } }>({});

  // Function to get days of the current month
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();

    // Get the first day of the month
    const firstDayOfMonth = new Date(year, month, 1);
    const firstDayIndex = firstDayOfMonth.getDay(); // Day of the week for the 1st of the month

    // Get the total number of days in the month
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysCount = lastDayOfMonth.getDate();

    const days: number[] = [];
    for (let i = 1; i <= daysCount; i++) {
      days.push(i);
    }

    
    // Prepend empty days based on the first day of the month (padding the previous month's days)
    for (let i = 0; i < firstDayIndex; i++) {
      days.unshift(0);
    }

    return days;
  };

  // Update calendar when the current date changes
  useEffect(() => {
    setDaysInMonth(getDaysInMonth(currentDate));
  }, [currentDate]);

  // Helper function to change the month
  const changeMonth = (increment: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + increment);
    setCurrentDate(newDate);
  };

  // Handle punch-in and punch-out time changes
  const handleTimeChange = (date: number, type: 'punchIn' | 'punchOut', time: string) => {
    const dateKey = formatDate(currentDate.getFullYear(), currentDate.getMonth(), date);
    setPunchTimes({
      ...punchTimes,
      [dateKey]: {
        ...punchTimes[dateKey],
        [type]: time,
      },
    });
  };

  // Calculate hours worked
  const calculateWorkedHours = (date: number) => {
    const dateKey = formatDate(currentDate.getFullYear(), currentDate.getMonth(), date);
    const punchIn = punchTimes[dateKey]?.punchIn;
    const punchOut = punchTimes[dateKey]?.punchOut;

    if (punchIn && punchOut) {
      const punchInTime = new Date(`1970-01-01T${punchIn}:00`);
      const punchOutTime = new Date(`1970-01-01T${punchOut}:00`);

      const diff = (punchOutTime.getTime() - punchInTime.getTime()) / (1000 * 60 * 60); // in hours

      if (diff >= 9) {
        return 'Present';  
      }

      return `${diff.toFixed(2)} hours Halfday`;  
    }

    return `In/Out`;
  };

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button
          className="month-button"
          onClick={() => changeMonth(-1)}
        >
          {'<'}
        </button>
        <div>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</div>
        <button
          className="month-button"
          onClick={() => changeMonth(1)}
        >
          {'>'}
        </button>
      </div>
      <div className="calendar-grid h-2">
        {dayNames.map((day, index) => (
          <div key={index} className="day-of-week">
            {day}
          </div>
        ))}
        {daysInMonth.map((day, index) => {
          if (day === 0) {
            return <div key={index}></div>; 
          }

          const isToday =
            day === currentDate.getDate() &&
            currentDate.getMonth() === new Date().getMonth() &&
            currentDate.getFullYear() === new Date().getFullYear();

          const dateKey = formatDate(currentDate.getFullYear(), currentDate.getMonth(), day);
          const workedHours = calculateWorkedHours(day);

          return (
            <div
              key={index}
              className={`day-box ${workedHours === 'Present' ? 'present' : ''} ${isToday ? 'today' : ''}`}
            >
              <div>{day}</div>
              <input
                id={`punch-in-${day}`}
                type="time"
                value={punchTimes[dateKey]?.punchIn || ''}
                onChange={(e) => handleTimeChange(day, 'punchIn', e.target.value)}
                className="day-input"
               
              />
              <input
                id={`punch-out-${day}`}
                type="time"
                value={punchTimes[dateKey]?.punchOut || ''}
                onChange={(e) => handleTimeChange(day, 'punchOut', e.target.value)}
                className="day-input"
              />
              <div className={`punch-status ${workedHours === 'Present' ? 'present-status' : 'absent-status'}`}>
                {workedHours}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;

