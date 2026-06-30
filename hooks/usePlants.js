import { useState } from "react";

export default function usePlants() {
  const [plants, setPlants] = useState([]);

  const addPlant = (plant) => {
    setPlants((currentPlants) => [...currentPlants, plant]);
  };

  const removePlant = (id) => {
    setPlants((currentPlants) =>
      currentPlants.filter((plant) => plant.id !== id)
    );
  };

  return {
    plants,
    addPlant,
    removePlant,
  };
}