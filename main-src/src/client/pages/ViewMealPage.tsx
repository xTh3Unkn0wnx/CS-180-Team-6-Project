import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ViewMeal } from "../components/ViewMeal";
import { AddMealEntry } from "../components/addMealEntry";
import { MealDocument } from "../interface/MealDocument";
import { useState, useEffect } from "react";
import axios from "axios";

export const ViewMealPage = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [meals, setMeals] = useState<MealDocument[]>([]);

  const addMeal = (meal: MealDocument) => {
    setMeals((prevMeals) => [...prevMeals, meal]);
    setButtonPopup(false);
  };

  const deleteMeal = (mealId: string) => {
    axios
      .delete(`/meals/${mealId}`)
      .then((response) => {
        console.log(response);
        alert("Meal Deleted!");
        fetchMeals();
      })
      .catch((error) => {
        console.warn(error);
        alert("Error: " + error.message);
      });
  };

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
      <div>
        <Header title={"Live Active"} />
        <ViewMeal meals={meals} deleteMeal={deleteMeal} />
        <button
          onClick={() => {
            setButtonPopup(true);
          }}
        >
          Add New Meal
        </button>
        <Footer />
      </div>
      <AddMealEntry
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        addMeal={addMeal}
      />
    </>
  );
};
