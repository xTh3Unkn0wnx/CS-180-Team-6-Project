import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { MealDocument } from "../interface/MealDocument";
import defaultFoodIcon from "../assets/defaultFoodIcon.jpg";
import "./ViewMeal.css";

export const ViewMeal = () => {
  const [meals, setMeals] = useState<MealDocument[]>([]);

  const fetchMeals = async () => {
    const userId = sessionStorage.getItem("userId");
    const response = await axios.get(`/meals?userId=${userId}`);
    setMeals(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <>
      <main>
        <div className="meal-container">
          {meals.map((meal) => (
            <div className="meal-card">
              <h3>{meal.mealName}</h3>
              <img
                src={
                  meal.urlImage && meal.urlImage.trim() !== ""
                    ? meal.urlImage
                    : defaultFoodIcon
                }
                alt="Meal"
              />
              <p>{meal.type}</p>
              <p>{meal.calories}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default ViewMeal;
