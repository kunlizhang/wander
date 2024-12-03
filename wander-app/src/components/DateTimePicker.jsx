import React, { useState, useEffect } from 'react';

const DateTimePicker = ({ dateRequired = false, timeRequired = false, defaultTime = '' }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(defaultTime);

  // Set default time when component mounts
  useEffect(() => {
    setTime(defaultTime);
  }, [defaultTime]);

  return (
    <div className="flex flex-row items-center gap-4 rounded-lg">
      <div className="flex flex-col w-full gap-2">
        <input
          type="date"
          id="date"
          value={date}
          required={dateRequired}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border bg-gray-100 text-primaryGreen border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryGreen focus:outline-none transition duration-200"
        />
      </div>

      <div className="flex flex-col w-full gap-2">
        <input
          type="time"
          id="time"
          value={time}
          required={timeRequired}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 border bg-gray-100 text-primaryGreen border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryGreen focus:outline-none transition duration-200"
        />
      </div>
    </div>
  );
};

export default DateTimePicker;