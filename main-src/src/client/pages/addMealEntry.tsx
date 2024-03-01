import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import axios from "axios";

export const AddMealEntry = () => {
  const [userId, setUserId] = React.useState(sessionStorage.getItem("userId")); // get user id from local storage
  const [meal, setMeal] = React.useState({
    mealName: "",
    description: "",
    calories: "",
    date: "",
    type: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setMeal((prevMeal) => ({ ...prevMeal, [name]: value }));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUserId(sessionStorage.getItem("userId"));
    axios
      .post("/meals/add", {
        userId: userId,
        ...meal,
      })
      .then((response) => {
        console.log(response);
        alert("Meal Added!");
      })
      .catch((error) => {
        console.warn(error);
        alert("Error: " + error.message);
      });
  };

  return (
    <>
      <Header title={"Live Active"} />
      <form onSubmit={handleSubmit}>
        <label>
          Meal Name:
          <input
            type="text"
            name="mealName"
            value={meal.mealName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={meal.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Calories:
          <input
            type="number"
            name="calories"
            value={meal.calories}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={meal.date}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Type:
          <select
            name="type"
            value={meal.type}
            onChange={handleInputChange}
            required
          >
            <option value="Meal">Meal</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </>
  );
}

export default AddMealEntry;
