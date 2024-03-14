import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { LuVegan, LuLeaf, LuWheatOff } from "react-icons/lu"
import { TbMeat } from "react-icons/tb"


const Category = () => {
    return (
        <List>
            <SLink to={"/search-food/cuisine/Vegan"}>
                <LuVegan />
                <h4>Vegan</h4>
            </SLink>
            <SLink to={"/search-food/cuisine/GlutenFree"}>
                <LuWheatOff />
                <h4>Gluten free</h4>
            </SLink>
            <SLink to={"/search-food/cuisine/Vegetarian"}>
                <LuLeaf />
                <h4>Vegetarian</h4>
            </SLink>
            <SLink to={"/search-food/cuisine/Paleo"}>
                <TbMeat />
                <h4>Meat</h4>
            </SLink>
        </List>
    )
}

const List = styled.div`
    display:flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  width: 6rem;
  height: 6rem;
  background: linear-gradient(35deg, #494949, #313131);
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: #000;
    font-size: 1rem;
    padding-top: 8rem;
  }
  svg {
    position: absolute;
    color: #fff;
    font-size: 2rem;
  }

  &:hover {
    transform: scale(0.9); /* Scale up on hover */
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: #000;
    }
    h4 {
      color: #000;
    }
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: #fff;
    }
    h4 {
      color: #000;
    }
  }
`;


export default Category