import { MealDocument } from "../interface/MealDocument";
import defaultFoodIcon from "../assets/defaultFoodIcon.jpg";
import "./ViewMeal.css";

export const Viewmeal = ({
  meals,
  deleteMeal,
}: {
  meals: MealDocument[];
  deleteMeal: (mealId: string) => void;
}) => {
  // const [meals, setMeals] = useState<MealDocument[]>([]);

  return (
    <div className="meal-container">
      {meals.map((meal) => (
        <div className="meal-card" key={meal._id}>
          <h3>{meal.mealName}</h3>
          <img
            src={
              meal.urlImage && meal.urlImage.trim() !== ""
                ? meal.urlImage
                : defaultFoodIcon
            }
            alt="Meal"
          />
          <p>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Meal Type:
            </span>{" "}
            {meal.type}
          </p>
          <p>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Calories:
            </span>{" "}
            {meal.calories}
          </p>
          <p>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Description:
            </span>{" "}
            <p dangerouslySetInnerHTML={{__html: meal.description}}></p>
          </p>
          <button
            className="delete-button"
            onClick={() => deleteMeal(meal._id)}
          >
            delete entry
          </button>
        </div>
      ))}
    </div>
  );
};

export default Viewmeal;
