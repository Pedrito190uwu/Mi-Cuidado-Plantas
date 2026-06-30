import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Header from "../components/Header";
import PlantCard from "../components/PlantCard";

const plants = [
  {
    id: "1",
    name: "Monstera",
    status: "Interior • Último riego: Hoy",
    time: "🌿",
  },
  {
    id: "2",
    name: "Lavanda",
    status: "Exterior • Último riego: Ayer",
    time: "🌸",
  },
  {
    id: "3",
    name: "Cactus",
    status: "Interior • Último riego: Hace 3 días",
    time: "🌵",
  },
  {
    id: "4",
    name: "Orquídea",
    status: "Interior • Último riego: Hoy",
    time: "🌺",
  },
];

export default function PlantsScreen() {
  return (
    <View style={styles.container}>
      <Header
        title="Mis Plantas"
        subtitle="Administra todas tus plantas"
      />

      <FlatList
        data={plants}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PlantCard
            name={item.name}
            status={item.status}
            time={item.time}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7F2",
    paddingHorizontal: 20,
  },
});