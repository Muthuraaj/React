import { useEffect, useState } from "react";
export default function useFetch(fetchFn, initialValue) {
  const [fetchedData, setFetchedData] = useState(initialValue);
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchFn();
        setFetchedData(places);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch Data!." });
      }

      setIsFetching(false);
    }

    fetchPlaces();
  }, [fetchFn]);
  return {
    fetchedData,
    isFetching,
    setFetchedData,
    error,
  };
}
