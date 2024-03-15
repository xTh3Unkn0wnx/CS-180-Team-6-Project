import React, { useEffect, useState } from "react";
import axios from "axios";
import { format, addDays, startOfWeek, endOfWeek } from "date-fns";
import Calendar from "react-calendar";
import "./CalendarComponent.css";
import { ExerciseDocument } from "../interface/ExerciseDocument";
import { MealDocument } from "../interface/MealDocument";

const CalendarComponent: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [exercises, setExercises] = useState<ExerciseDocument[]>([]);
  const [meals, setMeals] = useState<MealDocument[]>([]);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const startOfCurrentWeek = startOfWeek(selectedDate);
  const endOfCurrentWeek = endOfWeek(selectedDate);

  const fetchExercises = async () => {
    const userId = sessionStorage.getItem("userId");
    // console.log(userId);
    // console.log(startOfCurrentWeek.toISOString());
    // console.log(endOfCurrentWeek.toISOString());
    const response = await axios.get(`/exercises?userId=${userId}`);
    // &startDate=${startOfCurrentWeek.toISOString}&endDate=${endOfCurrentWeek.toISOString}
    const meal = await axios.get(`/meals?userId=${userId}`);
    setExercises(response.data);
    setMeals(meal.data);
    console.log(response.data);
    console.log(meal.data);
  };

  // Generate an array of dates for the current week
  const daysOfWeek = [];
  for (let i = 0; i < 7; i++) {
    const date = addDays(startOfCurrentWeek, i);
    daysOfWeek.push(date);
  }

  useEffect(() => {
    fetchExercises();
  }, [selectedDate]);

  return (
    <div>
      <Calendar
       onClickDay={handleDateChange}
        value={selectedDate}
        className="my-custom-calendar"
        calendarType="US"
      />
      <h2>Exercise Schedule for the Week:</h2>
      {/* <ul> */}
      <div className="date-container">
        {daysOfWeek.map((date) => (
          <div className="date-card" key={date.getTime()}>
            <div>
              <strong>{format(date, "eeee, MMM d")}</strong>
              <div className="exercise-div">
                <h3>Exercise</h3>
                {exercises.filter(
                  (exercise) =>
                    new Date(exercise.date).toISOString().slice(0,10) === date.toISOString().slice(0,10)
                ).length > 0 ? (
                  exercises
                    .filter(
                      (exercise) =>
                      new Date(exercise.date).toISOString().slice(0,10) === date.toISOString().slice(0,10)
                    )
                    .map((exercise) => (
                      <div key={exercise._id}>
                        <ul>
                          <li>Exercise Name: {exercise.exerciseName}</li>
                          <li>Duration (In Minutes): {exercise.duration}</li>
                          <li>Exercise Intensity: {exercise.intensity}</li>
                          <li dangerouslySetInnerHTML={{__html: exercise.description}}></li>
                        </ul>
                      </div>
                    ))
                ) : (
                  <p>No exercise</p>
                )}
              </div>
              <div className="meal-div">
                <h3>Meals</h3>
                {meals.filter(
                  (meal) => new Date(meal.date).toISOString().slice(0,10) === date.toISOString().slice(0,10)
                ).length > 0 ? (
                  meals
                    .filter(
                      (meal) => new Date(meal.date).toISOString().slice(0,10) === date.toISOString().slice(0,10)
                    )
                    .map((meal) => (
                      <div key={meal._id}>
                        <ul>
                          <li>Meal Name: {meal.mealName}</li>
                          <li dangerouslySetInnerHTML={{__html: meal.description}}></li>
                          <li>Calories: {meal.calories}</li>
                          <li>Type: {meal.type}</li>
                        </ul>
                      </div>
                    ))
                ) : (
                  <p>No Meals planned</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* </ul> */}
    </div>
  );
};

export default CalendarComponent;
