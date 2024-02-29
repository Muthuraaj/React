import { useEffect, useState } from "react";
import { availableProducts } from "./http";
const Products = () => {
  const [mealsData, setMealsData] = useState([]);
  useEffect(() => {
    async function fetching() {
      const data = await availableProducts();
      console.log(data);
      setMealsData(data);
    }
    fetching();
  }, []);

  console.log(mealsData);
  return (
    <div>
      <ul id="meals">
        {mealsData.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
