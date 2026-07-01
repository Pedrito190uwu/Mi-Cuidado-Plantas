import React, { useState } from "react";
import { View, StyleSheet, Alert, ScrollView, TouchableOpacity, Text, Image } from "react-native";
import Header from "../Components/Header";
import InputField from "../Components/InputField";
import CustomButton from "../Components/CustomButton";
import BottomNavigation from "../Components/BottomNavigation";
import { IMAGES } from "../constants/images";
import usePlants from "../hooks/usePlants";

export default function AddPlantScreen({ navigation }) {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [location, setLocation] = useState("Interior");
  const [wateringFrequency, setWateringFrequency] = useState("3");
  const { addPlant } = usePlants();
  const locationOptions = ["Interior", "Exterior", "Ambos"];

  const handleSave = () => {
    if (!name.trim()) {
      Alert.alert("Error", "Por favor ingresa el nombre de la planta.");
      return;
    }
    addPlant({
      name: name.trim(),
      species: species.trim() || "Planta",
      location,
      wateringFrequency: parseInt(wateringFrequency) || 3,
      lastWatered: new Date().toISOString().split('T')[0],
    });
    Alert.alert("¡Éxito!", `La planta "${name}" fue agregada correctamente.`, [
      { text: "OK", onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="Agregar Planta" subtitle="Registra una nueva planta en tu jardín" />
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Image source={IMAGES.plant} style={styles.icon} resizeMode="contain" />
          </View>
          <InputField label="Nombre de la planta *" placeholder="Ej. Monstera" value={name} onChangeText={setName} />
          <InputField label="Tipo de planta" placeholder="Ej. Monstera deliciosa" value={species} onChangeText={setSpecies} />
          <View style={styles.locationContainer}>
            <Text style={styles.locationLabel}>Ubicación</Text>
            <View style={styles.locationOptions}>
              {locationOptions.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[styles.locationOption, location === option && styles.locationOptionActive]}
                  onPress={() => setLocation(option)}
                >
                  <Text style={[styles.locationOptionText, location === option && styles.locationOptionTextActive]}>
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <InputField
            label="Frecuencia de riego (días)"
            placeholder="Ej. 3"
            value={wateringFrequency}
            onChangeText={setWateringFrequency}
            keyboardType="numeric"
          />
          <CustomButton title="Guardar planta" onPress={handleSave} />
        </View>
      </ScrollView>
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F7F2" },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: { alignItems: "center", marginBottom: 16 },
  icon: { width: 50, height: 50, tintColor: "#2E7D32" },
  locationContainer: { marginBottom: 18 },
  locationLabel: { fontSize: 16, fontWeight: "600", color: "#2E7D32", marginBottom: 8 },
  locationOptions: { flexDirection: "row" },
  locationOption: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: "#F4F7F2",
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#E8ECF0",
  },
  locationOptionActive: { backgroundColor: "#E8F5E9", borderColor: "#2E7D32" },
  locationOptionText: { fontSize: 14, color: "#666" },
  locationOptionTextActive: { color: "#2E7D32", fontWeight: "600" },
});