import { useState } from "react";

export default function usePlants() {
  const [plants, setPlants] = useState([]);

  const addPlant = (plant) => {
    setPlants((prevPlants) => [...prevPlants, plant]);
  };

  return {
    plants,
    addPlant,
  };
}