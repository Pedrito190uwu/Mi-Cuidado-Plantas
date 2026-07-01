import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function StatCard({ value, label, icon, backgroundColor = "#FFFFFF" }) {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      {icon && <Image source={icon} style={styles.icon} resizeMode="contain" />}
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 18,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginHorizontal: 6,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: { width: 32, height: 32, marginBottom: 6, tintColor: "#2E7D32" },
  value: { fontSize: 28, fontWeight: "700", color: "#2E7D32" },
  label: { marginTop: 4, fontSize: 13, color: "#666", textAlign: "center" },
});