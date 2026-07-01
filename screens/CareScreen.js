import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "../Components/Header";
import CustomButton from "../Components/CustomButton";
import BottomNavigation from "../Components/BottomNavigation";
import { IMAGES, getPlantImageByIndex } from "../constants/images";
import usePlants from "../hooks/usePlants";

export default function CareScreen({ navigation }) {
  const route = useRoute();
  const { plantId } = route.params || {};
  const { getPlantById, waterPlant } = usePlants();
  const plant = plantId ? getPlantById(plantId) : null;
  const plantImage = plant ? getPlantImageByIndex(plant.imageIndex || 0) : null;

  if (!plant) {
    return (
      <View style={styles.container}>
        <Header title="Cuidados" subtitle="Detalles de la planta" />
        <View style={styles.errorCard}>
          <Text style={styles.errorText}>Planta no encontrada</Text>
        </View>
        <BottomNavigation />
      </View>
    );
  }

  const handleWaterNow = () => {
    Alert.alert("Regar planta", `¿Estás seguro de que quieres regar ${plant.name}?`, [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Regar",
        onPress: () => {
          waterPlant(plant.id);
          Alert.alert("¡Éxito!", `${plant.name} ha sido regada.`);
          navigation.goBack();
        },
      },
    ]);
  };

  const isNeedsWatering = plant.status === 'needs_watering';

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title={plant.name} subtitle={plant.species || "Planta"} />
        <View style={styles.card}>
          <View style={styles.plantIconContainer}>
            {plantImage && (
              <Image source={plantImage} style={styles.plantIcon} resizeMode="cover" />
            )}
          </View>

          <View style={styles.infoGrid}>
            <View style={styles.infoItem}>
              <Image source={IMAGES.home} style={styles.infoIcon} resizeMode="contain" />
              <Text style={styles.infoLabel}>Ubicación</Text>
              <Text style={styles.infoValue}>{plant.location}</Text>
            </View>
            <View style={styles.infoItem}>
              <Image source={IMAGES.calendar} style={styles.infoIcon} resizeMode="contain" />
              <Text style={styles.infoLabel}>Último riego</Text>
              <Text style={styles.infoValue}>{plant.lastWatered}</Text>
            </View>
            <View style={styles.infoItem}>
              <Image source={IMAGES.calendar} style={styles.infoIcon} resizeMode="contain" />
              <Text style={styles.infoLabel}>Próximo riego</Text>
              <Text style={[styles.infoValue, isNeedsWatering && styles.urgentText]}>
                {plant.nextWatering}
                {isNeedsWatering && ' ⚠️'}
              </Text>
            </View>
            <View style={styles.infoItem}>
              <Image source={IMAGES.water} style={styles.infoIcon} resizeMode="contain" />
              <Text style={styles.infoLabel}>Frecuencia</Text>
              <Text style={styles.infoValue}>Cada {plant.wateringFrequency} días</Text>
            </View>
          </View>

          <View style={styles.divider} />
          <Text style={styles.sectionTitle}>Cuidados específicos</Text>

          <View style={styles.careItem}>
            <View style={styles.careHeader}>
              <Image source={IMAGES.waterDrop} style={styles.careIcon} resizeMode="contain" />
              <Text style={styles.careLabel}>Riego</Text>
            </View>
            <Text style={styles.careText}>{plant.care?.watering || 'Riega cuando la tierra esté seca al tacto'}</Text>
          </View>

          <View style={styles.careItem}>
            <View style={styles.careHeader}>
              <Image source={IMAGES.sun} style={styles.careIcon} resizeMode="contain" />
              <Text style={styles.careLabel}>Luz</Text>
            </View>
            <Text style={styles.careText}>{plant.care?.light || 'Luz indirecta brillante'}</Text>
          </View>

          <View style={styles.careItem}>
            <View style={styles.careHeader}>
              <Image source={IMAGES.waterDrop} style={styles.careIcon} resizeMode="contain" />
              <Text style={styles.careLabel}>Humedad</Text>
            </View>
            <Text style={styles.careText}>{plant.care?.humidity || 'Prefiere ambientes húmedos'}</Text>
          </View>

          <View style={styles.careItem}>
            <View style={styles.careHeader}>
              <Image source={IMAGES.temperature} style={styles.careIcon} resizeMode="contain" />
              <Text style={styles.careLabel}>Temperatura</Text>
            </View>
            <Text style={styles.careText}>{plant.care?.temperature || 'Ideal entre 18°C - 27°C'}</Text>
          </View>

          {isNeedsWatering && <CustomButton title="💧 Regar ahora" onPress={handleWaterNow} />}
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
  errorCard: { backgroundColor: "#FFFFFF", padding: 30, borderRadius: 16, marginHorizontal: 20, alignItems: "center" },
  errorText: { fontSize: 16, color: "#DC2626" },
  plantIconContainer: { alignItems: "center", marginBottom: 16 },
  plantIcon: { width: 80, height: 80, borderRadius: 40 },
  infoGrid: { flexDirection: "row", flexWrap: "wrap", marginBottom: 10 },
  infoItem: { width: "50%", paddingVertical: 8, alignItems: "center" },
  infoIcon: { width: 24, height: 24, tintColor: "#2E7D32", marginBottom: 4 },
  infoLabel: { fontSize: 12, color: "#888", marginBottom: 2 },
  infoValue: { fontSize: 14, fontWeight: "600", color: "#1F1F1F", textAlign: "center" },
  urgentText: { color: "#DC2626" },
  divider: { height: 1, backgroundColor: "#E8ECF0", marginVertical: 14 },
  sectionTitle: { fontSize: 17, fontWeight: "700", color: "#1F1F1F", marginBottom: 12 },
  careItem: { marginBottom: 12, backgroundColor: "#F8FAF7", padding: 12, borderRadius: 12 },
  careHeader: { flexDirection: "row", alignItems: "center", marginBottom: 4 },
  careIcon: { width: 20, height: 20, tintColor: "#2E7D32", marginRight: 8 },
  careLabel: { fontSize: 14, fontWeight: "600", color: "#2E7D32" },
  careText: { fontSize: 14, color: "#555", paddingLeft: 28, lineHeight: 20 },
});