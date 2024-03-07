import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const PopularFood = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popularFoods");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_RECIPE_KEY
        }&number=10`
      );
      const data = await api.json();
      localStorage.setItem("popularFoods", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <Wrapper>
      <h3>Popular Picks</h3>
      <Splide
        options={{
          perPage: 4,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={"/recipe/"+recipe.id}>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Link>
                <h4>{recipe.title}</h4>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
};


const Wrapper = styled.div`
    margin: 4rem 0rem;
    h3 {
      margin-bottom: 2rem;
      font-size: 2rem;
  }
`;
const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img {
      width: min(400px, 100%);
      border-top-left-radius: 2rem;
    }
  h4 {
      text-align: center;
      padding: 1rem;
      font-size: 1.3rem;
    }
    a {
      text-decoration: none;
    }
`;

const Gradient = styled.div`
    z-index:3;
    position:absolute;
    width:100%;
    height:100%;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.2));
`;

export default PopularFood;
