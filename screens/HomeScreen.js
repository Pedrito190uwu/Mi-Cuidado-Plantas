import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.title}>Cuida tus plantas</Text>
        <Text style={styles.subtitle}>
          ¡Hola, María! 🌿
        </Text>
      </View>

      {/* Tarjeta principal */}
      <View style={styles.card}>
        <Text style={styles.cardNumber}>6</Text>
        <Text style={styles.cardText}>Plantas activas</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AddPlant")}
        >
          <Text style={styles.buttonText}>+ Agregar planta</Text>
        </TouchableOpacity>
      </View>

      {/* Recordatorios */}
      <Text style={styles.sectionTitle}>Recordatorios de hoy</Text>

      <View style={styles.reminder}>
        <View>
          <Text style={styles.plantName}>Monstera</Text>
          <Text style={styles.plantInfo}>Necesita riego</Text>
        </View>

        <Text style={styles.time}>9:00 AM</Text>
      </View>

      <View style={styles.reminder}>
        <View>
          <Text style={styles.plantName}>Lavanda</Text>
          <Text style={styles.plantInfo}>Necesita riego</Text>
        </View>

        <Text style={styles.time}>10:00 AM</Text>
      </View>

      {/* Consejo */}
      <Text style={styles.sectionTitle}>Consejo del día</Text>

      <View style={styles.tipCard}>
        <Text style={styles.tipText}>
          Riega tus plantas temprano en la mañana para que absorban mejor el
          agua.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7F2",
    padding: 20,
  },

  header: {
    marginTop: 40,
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2E7D32",
  },

  subtitle: {
    fontSize: 18,
    marginTop: 5,
    color: "#555",
  },

  card: {
    backgroundColor: "#7CB342",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    marginBottom: 25,
  },

  cardNumber: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#fff",
  },

  cardText: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
  },

  buttonText: {
    color: "#2E7D32",
    fontWeight: "bold",
    fontSize: 16,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#2E7D32",
  },

  reminder: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    elevation: 2,
  },

  plantName: {
    fontSize: 17,
    fontWeight: "bold",
  },

  plantInfo: {
    color: "#666",
    marginTop: 5,
  },

  time: {
    color: "#2E7D32",
    fontWeight: "bold",
  },

  tipCard: {
    backgroundColor: "#E8F5E9",
    padding: 18,
    borderRadius: 15,
    marginBottom: 30,
  },

  tipText: {
    color: "#2E7D32",
    fontSize: 16,
    lineHeight: 22,
  },
});