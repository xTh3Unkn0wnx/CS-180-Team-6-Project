import { motion } from "framer-motion"
import Search from "../components/Search"
import Category from "../components/Category"
import Keto from "../components/Keto"
import PopularFood from "../components/PopularFood"
import styled from "styled-components";
import "../components/foodSearch.css"

const FoodSearch = () => {
  return (
    <div className="foodSearchScreen">
    <Nav/>
    <Search />
    <Category />
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
        <Keto/>
        <PopularFood/>
    </motion.div>
    <Nav/>
    </div>
  )
}

const Nav = styled.div`
  padding: 3rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;


export default FoodSearch