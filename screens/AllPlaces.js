import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { fetchPlaces } from "../util/database";

const AllPlaces = ({ route }) => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();
  // useEffect(() => { //commented out in L-216
  //   if (isFocused && route.params) {
  //     console.log("Route ", route?.params);
  //     setLoadedPlaces((curPlaces) => [...curPlaces, route?.params?.place]);
  //   }
  // }, [isFocused, route]);

  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      console.log("places ", places);
      setLoadedPlaces(places);
    }
    if (isFocused) {
      loadPlaces();
    }
  }, [isFocused]);
  return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;
