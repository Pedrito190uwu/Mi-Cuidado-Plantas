import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";

import Header from "../Components/Header";
import InputField from "../Components/InputField";
import CustomButton from "../Components/CustomButton";
import usePlants from "../hooks/usePlants";

export default function AddPlantScreen() {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [location, setLocation] = useState("");

  const { addPlant } = usePlants();

  const handleSave = () => {
    if (!name || !species || !location) {
      Alert.alert("Error", "Completa todos los campos.");
      return;
    }

    const newPlant = {
      id: Date.now().toString(),
      name,
      species,
      location,
    };

    addPlant(newPlant);

    Alert.alert("Éxito", "La planta fue agregada correctamente.");

    setName("");
    setSpecies("");
    setLocation("");
  };

  return (
    <View style={styles.container}>
      <Header title="Agregar Planta" />

      <InputField
        label="Nombre"
        placeholder="Ej. Monstera"
        value={name}
        onChangeText={setName}
      />

      <InputField
        label="Especie"
        placeholder="Ej. Deliciosa"
        value={species}
        onChangeText={setSpecies}
      />

      <InputField
        label="Ubicación"
        placeholder="Ej. Sala"
        value={location}
        onChangeText={setLocation}
      />

      <CustomButton
        title="Guardar"
        onPress={handleSave}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAF5",
    padding: 20,
  },
});