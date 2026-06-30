import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function StatCard({
  title,
  value,
  icon,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>

      <Text style={styles.value}>{value}</Text>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 8,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },

  icon: {
    fontSize: 28,
    marginBottom: 8,
  },

  value: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E7D32",
  },

  title: {
    marginTop: 6,
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});