import { useState, useEffect } from 'react';
import { 
  initialPlants, 
  getPlantsWithStatus, 
  calculateNextWatering,
  getPlantsNeedingWatering,
  getTodayWaterings,
  getTomorrowWaterings
} from '../data/plants';

export default function usePlants() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initialWithStatus = getPlantsWithStatus(initialPlants);
    setPlants(initialWithStatus);
    setLoading(false);
  }, []);

  const addPlant = (plantData) => {
    const nextWatering = calculateNextWatering(
      plantData.lastWatered || new Date().toISOString().split('T')[0],
      plantData.wateringFrequency || 3
    );

    const newPlant = {
      id: Date.now().toString(),
      name: plantData.name,
      species: plantData.species || 'Planta',
      location: plantData.location || 'Interior',
      lastWatered: plantData.lastWatered || new Date().toISOString().split('T')[0],
      nextWatering: nextWatering,
      wateringFrequency: parseInt(plantData.wateringFrequency) || 3,
      status: 'watered',
      imageIndex: plantData.imageIndex || Math.floor(Math.random() * 10),
      care: {
        watering: plantData.care?.watering || 'Riega cuando la tierra esté seca al tacto',
        light: plantData.care?.light || 'Luz adecuada',
        humidity: plantData.care?.humidity || 'Humedad moderada',
        temperature: plantData.care?.temperature || '18°C - 25°C'
      }
    };

    const updatedPlants = [...plants, newPlant];
    const withStatus = getPlantsWithStatus(updatedPlants);
    setPlants(withStatus);
  };

  const updatePlant = (id, updates) => {
    const updatedPlants = plants.map(plant => 
      plant.id === id ? { ...plant, ...updates } : plant
    );
    const withStatus = getPlantsWithStatus(updatedPlants);
    setPlants(withStatus);
  };

  const removePlant = (id) => {
    setPlants(currentPlants => 
      currentPlants.filter(plant => plant.id !== id)
    );
  };

  const waterPlant = (id) => {
    const today = new Date().toISOString().split('T')[0];
    const plant = plants.find(p => p.id === id);
    
    if (plant) {
      const nextWatering = calculateNextWatering(today, plant.wateringFrequency);
      updatePlant(id, {
        lastWatered: today,
        nextWatering: nextWatering,
        status: 'watered'
      });
    }
  };

  const getPlantById = (id) => {
    return plants.find(plant => plant.id === id);
  };

  const getPlantsNeedingWater = () => {
    return getPlantsNeedingWatering(plants);
  };

  const getTodayWateringPlants = () => {
    return getTodayWaterings(plants);
  };

  const getTomorrowWateringPlants = () => {
    return getTomorrowWaterings(plants);
  };

  return {
    plants,
    loading,
    addPlant,
    updatePlant,
    removePlant,
    waterPlant,
    getPlantById,
    getPlantsNeedingWater,
    getTodayWateringPlants,
    getTomorrowWateringPlants
  };
}