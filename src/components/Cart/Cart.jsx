import CartItem from "./CartItem";

export default function Cart({ cart, onIncrement, onDecrement }) {
  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className="cart">
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </div>
  );
}