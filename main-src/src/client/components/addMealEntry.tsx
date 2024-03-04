import React from "react";
import axios from "axios";
import "./addMealEntry.css";

interface AddMealEntryProps { 
  trigger: boolean;
  setTrigger: (value: boolean) => void;
  addMeal: (meal: any) => void;
}

export const AddMealEntry = ({trigger, setTrigger, addMeal}: AddMealEntryProps) => {
  const [userId, setUserId] = React.useState(sessionStorage.getItem("userId")); // get user id from local storage
  const [meal, setMeal] = React.useState({
    mealName: "",
    description: "",
    calories: "",
    date: "",
    type: "",
    urlImage: "",
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
        addMeal(meal);
      })
      .catch((error) => {
        console.warn(error);
        alert("Error: " + error.message);
      });
  };

  return (trigger) ? (
    <div className="popup">
      <form className="popup-inner" onSubmit={handleSubmit}>
        <h2>Add Meal</h2>
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
            <option value="Meal" defaultChecked>Meal</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </select>
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="urlImage"
            value={meal.urlImage}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
        <button onClick={() => setTrigger(false)} >Close Form</button>
      </form>
    </div>
  ) : "";
}

export default AddMealEntry;
