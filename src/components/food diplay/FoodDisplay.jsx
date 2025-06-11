import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import Fooditem from "../Food item/Fooditem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext); // Ensure correct context structure

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.length === 0 ? (
          <p>No dishes available.</p>
        ) : (
          food_list
            // .filter((item) => !category || item.category === category)
            .map((item, index) => {
              if (category === "All" || category === item.category) {
                return (
                  <Fooditem
                    key={index}
                    id={item._id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                );
              }
            })
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
