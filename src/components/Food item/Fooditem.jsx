import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import "./Fooditem.css";
import { useContext } from "react";

const Fooditem = ({ id, name, price, description, image }) => {
  const {
    cartItems = {},
    addToCart,
    removeFromCart,
  } = useContext(StoreContext); // Ensure cartItems is at least an empty object

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add to cart"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove one item"
            />
            <p>{cartItems[id] || 0}</p>{" "}
            {/* Ensure cartItems[id] is never undefined */}
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add one more"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default Fooditem;
