import PlantCard from "./PlantCard";

export default function PlantsList({ plants, onAddToCart }) {
  return (
    <div className="plants-list">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}
