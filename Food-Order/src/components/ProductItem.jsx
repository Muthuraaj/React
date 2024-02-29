export default function ProductItem({ item }) {
  return (
    <li className="meal-item">
      <article>
        <div>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p className="meal-item-price"> {item.price}</p>
          <p className="meal-item-description">{item.description}</p>
        </div>
        <button>Add to Cart</button>
      </article>
    </li>
  );
}
