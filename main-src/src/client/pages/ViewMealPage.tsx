import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ViewMeal } from "../components/ViewMeal";

export const ViewMealPage = () => {
  return (
    <>
      <Header title={"Live Active"} />
      <ViewMeal />
      <Footer />
    </>
  );
};