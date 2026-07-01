import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { getPlantImageByIndex } from "../constants/images";

export default function PlantCard({ 
  name, 
  location,
  daysOverdue,
  onPress,
  isActive = false,
  imageIndex = 0,
  lastWatered,
  nextWatering,
}) {
  const imageSource = getPlantImageByIndex(imageIndex);

  return (
    <TouchableOpacity 
      style={[styles.card, isActive && styles.activeCard]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.cardLeft}>
        <View style={[styles.imageContainer, isActive && styles.imageContainerActive]}>
          <Image source={imageSource} style={styles.plantImage} resizeMode="cover" />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.plantName}>{name}</Text>
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>{location || 'Interior'}</Text>
            {lastWatered && (
              <Text style={styles.dateText}>• Último: {lastWatered}</Text>
            )}
          </View>
        </View>
      </View>
      <View style={styles.cardRight}>
        {isActive ? (
          <>
            <View style={styles.statusBadge}>
              <Text style={styles.statusEmoji}>💧</Text>
              <Text style={styles.statusText}>Urgente</Text>
            </View>
            {daysOverdue > 0 && (
              <Text style={styles.overdueText}>{daysOverdue} días atrasado</Text>
            )}
          </>
        ) : (
          <View style={styles.statusBadgeSuccess}>
            <Text style={styles.statusEmoji}>✅</Text>
            <Text style={styles.statusTextSuccess}>Regada</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  activeCard: {
    backgroundColor: "#FFF8F8",
    borderWidth: 1,
    borderColor: "#FECACA",
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#E8F5E9",
    overflow: 'hidden',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainerActive: {
    backgroundColor: "#FEE2E2",
  },
  plantImage: {
    width: 44,
    height: 44,
  },
  infoContainer: {
    flex: 1,
  },
  plantName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1F1F1F",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    flexWrap: 'wrap',
  },
  locationText: {
    fontSize: 12,
    color: "#888",
  },
  dateText: {
    fontSize: 12,
    color: "#888",
    marginLeft: 4,
  },
  cardRight: {
    alignItems: "flex-end",
    marginLeft: 8,
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEE2E2",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  statusBadgeSuccess: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F5E9",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  statusEmoji: {
    fontSize: 14,
    marginRight: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#DC2626",
  },
  statusTextSuccess: {
    fontSize: 12,
    fontWeight: "600",
    color: "#2E7D32",
  },
  overdueText: {
    fontSize: 11,
    color: "#DC2626",
    marginTop: 2,
  },
});