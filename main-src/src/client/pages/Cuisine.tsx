import Search from "../components/Search"
import Category from "../components/Category"
import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {
  const [cuisines, setCuisines] = useState([]);
  const params = useParams();

  const getCuisines = async (name) => {
    const resp = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_RECIPE_KEY}&diet=${name}`
    );
    const data = await resp.json();

    return data.results;
  };

  useEffect(() => {
    let isMounted = true;
    getCuisines(params.type).then((data) => {
      if (isMounted) setCuisines(data);
    });
    return () => {
      isMounted = false;
    };
  }, [params.type]);

  return (
    <div>
    <Nav/>
    <Search />
    <Category />
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisines.map(({ id, title, image }) => (
        <Card key={id}>
          <Link to={`/search-food/recipe/${id}`}>
            <img src={image} alt={title} />
            <h4>{title}</h4>
          </Link>
        </Card>
      ))}
    </Grid>
    <Nav/>
    </div>
  );
};

const Nav = styled.div`
  padding: 3rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Grid = styled(motion.div)`
  padding-top:3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  text-align: center;
  gap: 3rem;
`;

const Card = styled.div`
  img {
    width: min(400px, 100%);
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;