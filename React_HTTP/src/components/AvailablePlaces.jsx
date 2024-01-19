import Error from "./Error.jsx";
import Places from "./Places.jsx";
import { useState, useEffect } from "react";
import { sortPlacesByDistance } from "../loc.js";
import { availablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [error, setError] = useState();
  const [isloading, setisLoading] = useState(false);
  const [AvailablePlaces, setAvailableplaces] = useState([]);
  useEffect(() => {
    async function fetchingPlaces() {
      setisLoading(true);
      try {
        const places = await availablePlaces();
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailableplaces(sortedPlaces);
          setisLoading(false);
        });
      } catch (error) {
        setError({
          message: error.message || "could not fetch place please try again",
        });
        setisLoading(false);
      }
    }
    fetchingPlaces();
  }, []);
  if (error) {
    return <Error title="Error occured" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      isloading={isloading}
      places={AvailablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
