export const initialPlants = [
  {
    id: '1',
    name: 'Monstera',
    species: 'Monstera deliciosa',
    location: 'Interior',
    lastWatered: '2026-06-28',
    nextWatering: '2026-07-01',
    wateringFrequency: 3,
    status: 'needs_watering',
    imageIndex: 0,
    care: {
      watering: 'Riega cuando la tierra esté seca al tacto',
      light: 'Luz indirecta brillante',
      humidity: 'Prefiere ambientes húmedos',
      temperature: '18°C - 27°C'
    }
  },
  {
    id: '2',
    name: 'Lavanda',
    species: 'Lavandula angustifolia',
    location: 'Exterior',
    lastWatered: '2026-06-27',
    nextWatering: '2026-06-30',
    wateringFrequency: 3,
    status: 'needs_watering',
    imageIndex: 1,
    care: {
      watering: 'Riega cuando la tierra esté seca',
      light: 'Luz solar directa',
      humidity: 'Baja humedad',
      temperature: '15°C - 25°C'
    }
  },
  {
    id: '3',
    name: 'Lirio de la Paz',
    species: 'Spathiphyllum',
    location: 'Interior',
    lastWatered: '2026-06-29',
    nextWatering: '2026-07-02',
    wateringFrequency: 3,
    status: 'watered',
    imageIndex: 2,
    care: {
      watering: 'Mantén la tierra húmeda',
      light: 'Luz indirecta',
      humidity: 'Alta humedad',
      temperature: '18°C - 24°C'
    }
  },
  {
    id: '4',
    name: 'Caléndula',
    species: 'Calendula officinalis',
    location: 'Exterior',
    lastWatered: '2026-06-26',
    nextWatering: '2026-06-29',
    wateringFrequency: 3,
    status: 'needs_watering',
    imageIndex: 3,
    care: {
      watering: 'Riega moderadamente',
      light: 'Sol directo',
      humidity: 'Media humedad',
      temperature: '15°C - 22°C'
    }
  },
  {
    id: '5',
    name: 'Suculenta',
    species: 'Echeveria elegans',
    location: 'Interior',
    lastWatered: '2026-06-28',
    nextWatering: '2026-07-05',
    wateringFrequency: 7,
    status: 'watered',
    imageIndex: 4,
    care: {
      watering: 'Riega solo cuando la tierra esté completamente seca',
      light: 'Luz brillante directa',
      humidity: 'Baja humedad',
      temperature: '20°C - 28°C'
    }
  },
  {
    id: '6',
    name: 'Helecho',
    species: 'Nephrolepis exaltata',
    location: 'Interior',
    lastWatered: '2026-06-27',
    nextWatering: '2026-07-01',
    wateringFrequency: 4,
    status: 'needs_watering',
    imageIndex: 5,
    care: {
      watering: 'Mantén la tierra húmeda pero no encharcada',
      light: 'Luz indirecta',
      humidity: 'Alta humedad',
      temperature: '16°C - 24°C'
    }
  }
];

export const getPlantsWithStatus = (plants) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return plants.map(plant => {
    const nextDate = new Date(plant.nextWatering);
    nextDate.setHours(0, 0, 0, 0);
    
    const diffDays = Math.ceil((nextDate - today) / (1000 * 60 * 60 * 24));
    
    let status = 'watered';
    if (diffDays <= 0) status = 'needs_watering';
    
    return {
      ...plant,
      status,
      statusText: status === 'needs_watering' ? 'Necesita riego' : 'Regada'
    };
  });
};

export const calculateNextWatering = (lastWatered, frequency) => {
  const date = new Date(lastWatered);
  date.setDate(date.getDate() + frequency);
  return date.toISOString().split('T')[0];
};

export const formatDate = (dateString) => {
  const date = new Date(dateString + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  if (date.getTime() === today.getTime()) return 'Hoy';
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  if (date.getTime() === yesterday.getTime()) return 'Ayer';
  
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
};

export const getPlantsNeedingWatering = (plants) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return plants.filter(plant => {
    const nextDate = new Date(plant.nextWatering);
    nextDate.setHours(0, 0, 0, 0);
    return nextDate.getTime() <= today.getTime();
  });
};

export const getTodayWaterings = (plants) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return plants.filter(plant => {
    const nextDate = new Date(plant.nextWatering);
    nextDate.setHours(0, 0, 0, 0);
    return nextDate.getTime() === today.getTime();
  });
};

export const getTomorrowWaterings = (plants) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  
  return plants.filter(plant => {
    const nextDate = new Date(plant.nextWatering);
    nextDate.setHours(0, 0, 0, 0);
    return nextDate.getTime() === tomorrow.getTime();
  });
};