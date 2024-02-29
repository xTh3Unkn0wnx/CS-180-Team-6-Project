import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format, addDays, startOfWeek, endOfWeek } from 'date-fns';
import Calendar from 'react-calendar';
import './CalendarComponent.css'
import { ExerciseDocument } from '../interface/ExerciseDocument';
import { log } from 'console';

const CalendarComponent: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [exercises, setExercises] = useState<ExerciseDocument[]>([]);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const startOfCurrentWeek = startOfWeek(selectedDate);
  const endOfCurrentWeek = endOfWeek(selectedDate);

  const fetchExercises = async () => {
    const userId = sessionStorage.getItem('userId');
    // console.log(userId);
    // console.log(startOfCurrentWeek.toISOString());
    // console.log(endOfCurrentWeek.toISOString());
    const response = await axios.get(`/exercises?userId=${userId}&startDate=${startOfCurrentWeek.toISOString}&endDate=${endOfCurrentWeek.toISOString}`);
    setExercises(response.data);
    console.log(response.data);
  }

  // Generate an array of dates for the current week
  const daysOfWeek = [];
  for (let i = 0; i < 7; i++) {
    const date = addDays(startOfCurrentWeek, i);
    daysOfWeek.push(date);
  }

  useEffect(() => {
    fetchExercises();
  }, [selectedDate]
  );

  return (
    <div>
      <Calendar
        onClickDay={handleDateChange}
        value={selectedDate}
        className="my-custom-calendar"
      />
      <h2>Exercise Schedule for the Week:</h2>
      {/* <ul> */}
        {daysOfWeek.map((date) => (
          <div key={date.getTime()}>
            <strong>{format(date, 'eeee, MMM d')}</strong> -
            {exercises.filter(exercise => new Date(exercise.date).getDate() === date.getDate()).map(exercise => (
            <div key={exercise._id}>{exercise.exerciseName}</div>
            ))}
          </div>
        ))}
      {/* </ul> */}
    </div>
  );
};

export default CalendarComponent;