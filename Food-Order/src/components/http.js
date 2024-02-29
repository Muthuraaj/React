export async function availableProducts() {
  const response = await fetch("http://localhost:3000/meals");
  const productDatas = await response.json();
  if (!response.ok) {
    throw new Error("fetching failed");
  }
  return productDatas;
}
