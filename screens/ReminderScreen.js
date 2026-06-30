import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import Header from "../components/Header";
import ReminderCard from "../components/ReminderCard";

const reminders = [
  {
    id: "1",
    plant: "Monstera",
    date: "Hoy - 9:00 AM",
  },
  {
    id: "2",
    plant: "Lavanda",
    date: "Hoy - 10:00 AM",
  },
  {
    id: "3",
    plant: "Cactus",
    date: "Mañana - 8:00 AM",
  },
];

export default function ReminderScreen() {
  return (
    <View style={styles.container}>
      <Header
        title="Recordatorios"
        subtitle="Próximos riegos"
      />

      <FlatList
        data={reminders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ReminderCard
            plant={item.plant}
            date={item.date}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7F2",
    padding: 20,
  },
});