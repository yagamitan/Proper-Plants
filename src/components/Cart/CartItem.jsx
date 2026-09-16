export default function CartItem({ item, onIncrement, onDecrement }) {
  return (
    <div className="cart-item">
      <span className="cart-image">{item.image}</span>
      <span className="cart-name">{item.name}</span>

      <div className="cart-controls">
        <button onClick={() => onDecrement(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onIncrement(item.id)}>+</button>
      </div>
    </div>
  );
}
