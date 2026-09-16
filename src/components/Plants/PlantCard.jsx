export default function PlantCard({ plant, onAddToCart }) {
  return (
    <div className="plant-card">
      <div className="plant-image">{plant.image}</div>
      <h3>{plant.name}</h3>
      <button onClick={() => onAddToCart(plant)}>Add to cart</button>
    </div>
  );
}
