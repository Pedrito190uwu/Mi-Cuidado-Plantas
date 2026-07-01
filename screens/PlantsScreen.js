import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Header from "../Components/Header";
import PlantCard from "../Components/PlantCard";
import CustomButton from "../Components/CustomButton";
import BottomNavigation from "../Components/BottomNavigation";
import usePlants from "../hooks/usePlants";
import { formatDate } from "../data/plants";

export default function PlantsScreen({ navigation }) {
  const { plants } = usePlants();

  if (plants.length === 0) {
    return (
      <View style={styles.container}>
        <Header title="Mis Plantas" subtitle="Administra todas tus plantas" />
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyEmoji}>🌱</Text>
          <Text style={styles.emptyTitle}>No tienes plantas registradas</Text>
          <Text style={styles.emptySubtitle}>Agrega tu primera planta para comenzar</Text>
          <CustomButton title="+ Agregar planta" onPress={() => navigation.navigate("AddPlant")} />
        </View>
        <BottomNavigation />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Mis Plantas" subtitle={`${plants.length} plantas en total`} showAvatar={false} />
      <FlatList
        data={plants}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PlantCard
            name={item.name}
            location={item.location}
            imageIndex={item.imageIndex}
            lastWatered={formatDate(item.lastWatered)}
            isActive={item.status === 'needs_watering'}
            daysOverdue={item.status === 'needs_watering' ? Math.ceil((new Date() - new Date(item.nextWatering)) / (1000 * 60 * 60 * 24)) : 0}
            onPress={() => navigation.navigate("Care", { plantId: item.id })}
          />
        )}
        contentContainerStyle={styles.listContent}
        ListFooterComponent={<View style={styles.footerSpacer} />}
      />
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F7F2" },
  listContent: { paddingHorizontal: 20, paddingBottom: 20 },
  footerSpacer: { height: 10 },
  emptyContainer: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 30 },
  emptyEmoji: { fontSize: 60, marginBottom: 20 },
  emptyTitle: { fontSize: 20, fontWeight: "700", color: "#1F1F1F", marginBottom: 10 },
  emptySubtitle: { fontSize: 16, color: "#707070", textAlign: "center", marginBottom: 30 },
});