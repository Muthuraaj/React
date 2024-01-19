export async function availablePlaces() {
  const response = await fetch("http://localhost:3001/places");
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("fetching failed");
  }
  return resData.places;
}

export async function updatePlaces(places) {
  const response = await fetch("http://localhost:3001/user-places", {
    method: "PUT",
    body: JSON.stringify({ places: places }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("failed to update the data");
  }
  return resData.message;
}

export async function SelectedPlaces() {
  const response = await fetch("http://localhost:3001/user-places");
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("failed to fetch selected places");
  }

  return resData.places;
}
