import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

const Card = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-danger">Your Cart</h3>
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle text-center">
          <thead className="table-dark">
            <tr>
              <th>Item</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {food_list.map((item) => {
              const quantity = cartItems[item._id];
              if (quantity > 0) {
                return (
                  <tr style={{ backgroundColor: "tomato" }} key={item._id}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-thumbnail"
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                        }}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>{quantity}</td>
                    <td>${item.price * quantity}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => removeFromCart(item._id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Card;
