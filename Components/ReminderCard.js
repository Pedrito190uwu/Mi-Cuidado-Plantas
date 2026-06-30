import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ReminderCard({
  plant,
  date,
}) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.plant}>{plant}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <Text style={styles.icon}>💧</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },

  plant: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#2F4F2F",
  },

  date: {
    marginTop: 5,
    fontSize: 14,
    color: "#666",
  },

  icon: {
    fontSize: 28,
  },
});