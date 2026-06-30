import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Header from "../Components/Header";
import InputField from "../Components/InputField";
import CustomButton from "../Components/CustomButton";

export default function AddPlantScreen() {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [location, setLocation] = useState("");

  const handleSave = () => {
    console.log("Guardar planta");
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
    padding: 20,
    backgroundColor: "#F7FAF5",
  },
});