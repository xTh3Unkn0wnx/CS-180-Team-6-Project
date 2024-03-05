import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Search from "../components/Search"
import Category from "../components/Category"

const Recipe = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const params = useParams();

  const fetchDetails = async () => {
    const resp = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${import.meta.env.VITE_RECIPE_KEY}`
    );
    const data = await resp.json();
    console.log(data)

    return data;
  };

  useEffect(() => {
    let isMounted = true;

    fetchDetails().then((data) => {
      if (isMounted) setDetails(data);
    });
    return () => {
      isMounted = false;
    };
  }, [params.id]);

  return (
    <div>
    <Nav/>
    <Search />
    <Category />
    <Wrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
        <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
      </div>
      <Info>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map(({ id, original }) => (
              <li key={id}>{original}</li>
            ))}
          </ul>
        )}

        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}
      </Info>
    </Wrapper>
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

const Wrapper = styled.div`
  padding-top:3rem;
  margin: 10rem inherit 5rem;
  display: flex;

  @media (max-width: 1068px) {
    flex-direction: column;
    flex:1;
  }
  
  div {
    flex: 1;
  }

  .active {
    background: linear-gradient(to right, #f27121, #e94057);
    color: #fff;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  ul {
    margin-top: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  p {
    padding-top: 2rem;
    margin: 1rem 0;
    font-size: 1.2rem;
    line-height: 1.8rem;
    max-width: 500px
    &:first-child {
      margin-top: 2rem;
    }
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid #000;
  margin-right: 2rem;
  font-weight: 600;
  font-size: 1rem;
`;

const Info = styled.div`
  margin-left: 5rem;

  @media (max-width: 1068px) {
    margin-top: 3rem;
    margin-left: 1rem;
  }
`;

export default Recipe;