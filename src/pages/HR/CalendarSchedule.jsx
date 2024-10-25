import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import axiosInstance from '../../api/axiosInstance';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Sidebar from '../../commons/Sidebar'; ''

const localizer = momentLocalizer(moment);

const CalendarSchedule = () => {
  const [events, setEvents] = useState([]); 

  const fetchEvents = async () => {
    try {
      const response = await axiosInstance.get('/api/getSchedule');

      // Map the data to the format needed for the calendar
      const formattedEvents = response.data.map(event => ({
        title: event.title,
        start: new Date(event.start),
        end: new Date(event.end),   
      }));

      setEvents(formattedEvents); // Update state with formatted events
      console.log('Fetched Events:', formattedEvents); // Log formatted events
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents(); // Fetch events on component mount
  }, []);

  return (
    <div className='h-screen'>
      <div className='flex h-full'>
        <Sidebar/>
        <div className='w-full h-screen p-8'>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }} 
          />
        </div>
        
      </div>
      
    </div>
  );
};

export default CalendarSchedule;
