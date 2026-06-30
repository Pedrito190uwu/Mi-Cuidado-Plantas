import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../components/Header";

export default function CareScreen() {
  return (
    <View style={styles.container}>
      <Header
        title="Cuidados"
        subtitle="Consejos para mantener tus plantas saludables"
      />

      <View style={styles.card}>
        <Text style={styles.title}>🌱 Recomendaciones</Text>

        <Text style={styles.text}>
          • Riega tus plantas según sus necesidades.
        </Text>

        <Text style={styles.text}>
          • Evita el exceso de agua.
        </Text>

        <Text style={styles.text}>
          • Colócalas donde reciban la luz adecuada.
        </Text>

        <Text style={styles.text}>
          • Limpia las hojas regularmente.
        </Text>

        <Text style={styles.text}>
          • Usa fertilizante cuando sea necesario.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7F2",
    padding: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
    elevation: 3,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 15,
  },

  text: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
    lineHeight: 24,
  },
});