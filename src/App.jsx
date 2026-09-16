import { useState } from "react";
import PLANTS from "./data";
import PlantsList from "./components/Plants/PlantsList";
import Cart from "./components/Cart/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(plant) {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === plant.id);

      if (exists) {
        return prevCart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevCart, { ...plant, quantity: 1 }];
    });
  }

  function handleIncrement(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function handleDecrement(id) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  return (
    <>
      <h1>Proper Plants</h1>
      <p>Welcome to Proper Plants, a thriving local nursery!</p>
      <PlantsList plants={PLANTS} onAddToCart={handleAddToCart} />
      <Cart cart={cart} onIncrement={handleIncrement} onDecrement={handleDecrement} />
    </>
  );
}
