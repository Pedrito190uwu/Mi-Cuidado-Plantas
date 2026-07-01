import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Header from "../Components/Header";
import BottomNavigation from "../Components/BottomNavigation";
import { IMAGES } from "../constants/images";
import usePlants from "../hooks/usePlants";

export default function ProfileScreen() {
  const { plants } = usePlants();

  return (
    <View style={styles.container}>
      <Header title="Perfil" showAvatar={false} />

      <View style={styles.card}>
        <View style={styles.avatarContainer}>
          <Image source={IMAGES.profile} style={styles.avatar} resizeMode="contain" />
        </View>
        <Text style={styles.name}>María García</Text>
        <Text style={styles.email}>maria@email.com</Text>

        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{plants.length}</Text>
            <Text style={styles.statLabel}>Plantas</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {plants.filter(p => p.status === 'needs_watering').length}
            </Text>
            <Text style={styles.statLabel}>Pendientes</Text>
          </View>
        </View>
      </View>

      <View style={styles.menuCard}>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={IMAGES.reminders} style={styles.menuIcon} resizeMode="contain" />
          <Text style={styles.menuText}>Notificaciones</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={IMAGES.care} style={styles.menuIcon} resizeMode="contain" />
          <Text style={styles.menuText}>Consejos de cuidado</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={IMAGES.calendar} style={styles.menuIcon} resizeMode="contain" />
          <Text style={styles.menuText}>Historial de riegos</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>
      </View>

      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F7F2" },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 24,
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  avatar: { width: 40, height: 40, tintColor: "#2E7D32" },
  name: { fontSize: 20, fontWeight: "700", color: "#1F1F1F" },
  email: { fontSize: 14, color: "#888", marginTop: 4 },
  statsRow: {
    flexDirection: "row",
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#E8ECF0",
    width: "100%",
    justifyContent: "center",
  },
  statItem: { alignItems: "center", paddingHorizontal: 30 },
  statNumber: { fontSize: 22, fontWeight: "700", color: "#2E7D32" },
  statLabel: { fontSize: 13, color: "#888", marginTop: 2 },
  statDivider: { width: 1, backgroundColor: "#E8ECF0" },
  menuCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginHorizontal: 20,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  menuIcon: { width: 22, height: 22, tintColor: "#2E7D32", marginRight: 14 },
  menuText: { flex: 1, fontSize: 15, color: "#1F1F1F" },
  menuArrow: { fontSize: 20, color: "#C0C0C0" },
});