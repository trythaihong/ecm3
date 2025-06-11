import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import { useState } from "react";
import FoodDisplay from "../../components/food diplay/FoodDisplay";
import Appdowload from "../../components/App/Appdowload";
// import Card from "../card/Card";
const Home = () => {
  const [category, setcategory] = useState("All");
  return (
    <div>
      <Header></Header>
      <ExploreMenu category={category} setcategory={setcategory}></ExploreMenu>
      <FoodDisplay category={category} />
      <Appdowload></Appdowload>
    </div>
  );
};

export default Home;
