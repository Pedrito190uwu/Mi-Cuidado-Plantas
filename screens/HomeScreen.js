import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

import Header from "../components/Header";
import CustomButton from "../components/CustomButton";
import PlantCard from "../components/PlantCard";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>

      <Header
        title="Cuida tus plantas"
        subtitle="¡Hola, María! 🌿"
      />

      <View style={styles.card}>
        <Text style={styles.cardNumber}>6</Text>
        <Text style={styles.cardText}>Plantas activas</Text>

        <CustomButton
          title="+ Agregar planta"
          onPress={() => navigation.navigate("AddPlant")}
        />
      </View>

      <Text style={styles.sectionTitle}>
        Recordatorios de hoy
      </Text>

      <PlantCard
        name="Monstera"
        status="Necesita riego"
        time="9:00 AM"
      />

      <PlantCard
        name="Lavanda"
        status="Necesita riego"
        time="10:00 AM"
      />

      <Text style={styles.sectionTitle}>
        Consejo del día
      </Text>

      <View style={styles.tipCard}>
        <Text style={styles.tipText}>
          Riega tus plantas temprano en la mañana para que absorban mejor el agua.
        </Text>
      </View>

    </ScrollView>
  );
}