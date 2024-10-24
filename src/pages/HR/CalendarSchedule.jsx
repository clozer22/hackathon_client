import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Make sure you import the CSS for the calendar

const localizer = momentLocalizer(moment);

const CalendarSchedule = () => {
  // Dummy event list
  const myEventsList = [
    {
      title: 'Project Meeting',
      start: new Date(2024, 9, 25, 10, 0),  // October 25, 2024, 10:00 AM
      end: new Date(2024, 9, 25, 12, 0),    // October 25, 2024, 12:00 PM
    },
    {
      title: 'Team Building Activity',
      start: new Date(2024, 9, 26, 9, 0),   // October 26, 2024, 9:00 AM
      end: new Date(2024, 9, 26, 17, 0),    // October 26, 2024, 5:00 PM
    },
    {
      title: 'Client Presentation',
      start: new Date(2024, 9, 27, 14, 0),  // October 27, 2024, 2:00 PM
      end: new Date(2024, 9, 27, 15, 30),   // October 27, 2024, 3:30 PM
    },
  ];

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Schedule Calendar</h1>
      <Calendar
        localizer={localizer}
        events={myEventsList} // Pass the dummy event list here
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }} // Adjust the height as needed
      />
    </div>
  );
};

export default CalendarSchedule;
