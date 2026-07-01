import React from "react";
import { View, FlatList, StyleSheet, Text, Image } from "react-native";
import Header from "../Components/Header";
import ReminderCard from "../Components/ReminderCard";
import BottomNavigation from "../Components/BottomNavigation";
import { IMAGES } from "../constants/images";
import usePlants from "../hooks/usePlants";

export default function ReminderScreen({ navigation }) {
  const { plants, getPlantsNeedingWater } = usePlants();
  const plantsNeedingWater = getPlantsNeedingWater();

  if (plantsNeedingWater.length === 0) {
    return (
      <View style={styles.container}>
        <Header title="Recordatorios" subtitle="Próximos riegos" />
        <View style={styles.emptyContainer}>
          <Image source={IMAGES.plant} style={styles.emptyIcon} resizeMode="contain" />
          <Text style={styles.emptyTitle}>🎉 ¡Todo en orden!</Text>
          <Text style={styles.emptySubtitle}>
            Todas tus plantas están regadas. Vuelve más tarde para ver nuevos recordatorios.
          </Text>
        </View>
        <BottomNavigation />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Recordatorios" subtitle={`${plantsNeedingWater.length} plantas necesitan riego`} />
      <FlatList
        data={plantsNeedingWater}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ReminderCard
            plant={item.name}
            date={`🔔 Necesita riego - ${item.location}`}
            onPress={() => navigation.navigate("Care", { plantId: item.id })}
          />
        )}
        showsVerticalScrollIndicator={false}
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
  emptyIcon: { width: 60, height: 60, tintColor: "#2E7D32", marginBottom: 16 },
  emptyTitle: { fontSize: 22, fontWeight: "700", color: "#1F1F1F", marginBottom: 8 },
  emptySubtitle: { fontSize: 16, color: "#707070", textAlign: "center", lineHeight: 24 },
});