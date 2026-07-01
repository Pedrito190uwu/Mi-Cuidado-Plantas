export const IMAGES = {
  home: require('../../assets/Img/casa.png'),
  plants: require('../../assets/Img/cuadricula.png'),
  care: require('../../assets/Img/salud.png'),
  reminders: require('../../assets/Img/notificacion.png'),
  profile: require('../../assets/Img/usuario.png'),
  
  plant: require('../../assets/Img/planta.png'),
  water: require('../../assets/Img/soltar.png'),
  waterDrop: require('../../assets/Img/gotas.png'),
  sun: require('../../assets/Img/soleado.png'),
  temperature: require('../../assets/Img/temperatura.png'),
  calendar: require('../../assets/Img/calendario.png'),
  
  plantas: require('../../assets/Img/plantas.png'),
  planta1: require('../../assets/Img/planta1.png'),
  planta2: require('../../assets/Img/planta2.png'),
  planta3: require('../../assets/Img/planta3.png'),
  planta4: require('../../assets/Img/planta4.png'),
  plantas5: require('../../assets/Img/plantas5.png'),
  plantas6: require('../../assets/Img/plantas6.png'),
  plantas7: require('../../assets/Img/plantas7.png'),
  plantas8: require('../../assets/Img/plantas8.png'),
  plantas9: require('../../assets/Img/plantas9.png'),
  plantas10: require('../../assets/Img/plantas10.png'),
};

export default IMAGES;

const allPlantImages = [
  IMAGES.planta1,
  IMAGES.planta2,
  IMAGES.planta3,
  IMAGES.planta4,
  IMAGES.plantas5,
  IMAGES.plantas6,
  IMAGES.plantas7,
  IMAGES.plantas8,
  IMAGES.plantas9,
  IMAGES.plantas10,
];

export const getRandomPlantImage = () => {
  return allPlantImages[Math.floor(Math.random() * allPlantImages.length)];
};

export const getPlantImageByIndex = (index) => {
  return allPlantImages[index % allPlantImages.length];
};