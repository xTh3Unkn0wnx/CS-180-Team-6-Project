import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import Search from "../components/Search"
import Category from "../components/Category"
import { Box } from '@mui/material';

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const parmas = useParams();

  const getSearchedRecipes = async (search) => {
    const resp = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_RECIPE_KEY}&query=${search}`
    );
    const data = await resp.json();

    return data.results;
  };

  useEffect(() => {
    let isMounted = true;
    getSearchedRecipes(parmas.search).then((data) => {
      if (isMounted) setSearchedRecipes(data);
    });

    return () => {
      isMounted = false;
    };
  }, [parmas.search]);
  
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Nav/>
    <Search />
    <Category />
    <Grid>
      {searchedRecipes.map(({ title, id, image }) => (
        <Card key={id}>
          <Link to={`/search-food/recipe/${id}`}>
            <img src={image} alt={title} />
            <h4>{title}</h4>
          </Link>
        </Card>
      ))}
    </Grid>
    <Nav/>
    </Box>
  );
};

const Nav = styled.div`
  padding: 3rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Grid = styled.div`
  padding-top:3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  text-align: center;
  gap: 3rem;
`;

const Card = styled.div`
  img {
    width: min(500px, 100%);
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

export default Searched;