import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import CustomButton from "../Components/CustomButton";
import PlantCard from "../Components/PlantCard";
import BottomNavigation from "../Components/BottomNavigation";
import { IMAGES } from "../constants/images";
import usePlants from "../hooks/usePlants";

export default function HomeScreen({ navigation }) {
  const { 
    plants, 
    getPlantsNeedingWater,
    getTodayWateringPlants,
    getTomorrowWateringPlants 
  } = usePlants();
  
  const plantsNeedingWater = getPlantsNeedingWater();
  const todayPlants = getTodayWateringPlants();
  const tomorrowPlants = getTomorrowWateringPlants();
  const activePlants = plants.length;

  const displayPlants = plants.slice(0, 6);

  const handleAddPlant = () => {
    navigation.navigate("AddPlant");
  };

  const handlePlantPress = (plantId) => {
    navigation.navigate("Care", { plantId });
  };

  const getMostCriticalPlant = () => {
    if (plantsNeedingWater.length === 0) return null;
    return plantsNeedingWater.reduce((a, b) => {
      const daysA = new Date(a.nextWatering) - new Date();
      const daysB = new Date(b.nextWatering) - new Date();
      return daysA < daysB ? a : b;
    });
  };

  const criticalPlant = getMostCriticalPlant();

  return (
    <View style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <ImageBackground 
          source={IMAGES.plantas}
          style={styles.headerBackground}
          imageStyle={styles.headerImage}
        >
          <LinearGradient
            colors={['rgba(46, 125, 50, 0.85)', 'rgba(27, 94, 32, 0.92)']}
            style={styles.headerGradient}
          >
            <View style={styles.headerContent}>
              <View style={styles.headerTop}>
                <View>
                  <Text style={styles.headerGreeting}>🌱 ¡Hola, María!</Text>
                  <Text style={styles.headerSubtitle}>
                    tus plantas te necesitan
                  </Text>
                </View>
                <TouchableOpacity style={styles.avatarButton}>
                  <Image source={IMAGES.profile} style={styles.avatarIcon} />
                </TouchableOpacity>
              </View>


              <View style={styles.statsGrid}>
                <View style={styles.statCard}>
                  <Image source={IMAGES.plant} style={styles.statIcon} />
                  <Text style={styles.statNumber}>{activePlants}</Text>
                  <Text style={styles.statLabel}>Plantas</Text>
                </View>
                <View style={[styles.statCard, styles.statCardWarning]}>
                  <Image source={IMAGES.water} style={styles.statIcon} />
                  <Text style={[styles.statNumber, styles.statNumberWarning]}>
                    {plantsNeedingWater.length}
                  </Text>
                  <Text style={styles.statLabel}>Por regar</Text>
                </View>
                <View style={styles.statCard}>
                  <Image source={IMAGES.calendar} style={styles.statIcon} />
                  <Text style={styles.statNumber}>
                    {plants.filter(p => p.status === 'watered').length}
                  </Text>
                  <Text style={styles.statLabel}>Regadas</Text>
                </View>
              </View>

              <CustomButton 
                title="+ Agregar nueva planta" 
                onPress={handleAddPlant}
              />
            </View>
          </LinearGradient>
        </ImageBackground>

        {criticalPlant && (
          <View style={styles.alertCard}>
            <View style={styles.alertContent}>
              <View style={styles.alertIconContainer}>
                <Text style={styles.alertEmoji}>🚨</Text>
              </View>
              <View style={styles.alertTextContainer}>
                <Text style={styles.alertTitle}>¡{criticalPlant.name} necesita agua!</Text>
                <Text style={styles.alertSubtext}>
                  Último riego: {criticalPlant.lastWatered}
                </Text>
              </View>
              <TouchableOpacity 
                style={styles.alertButton}
                onPress={() => navigation.navigate("Care", { plantId: criticalPlant.id })}
              >
                <Text style={styles.alertButtonText}>Regar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleContainer}>
              <Image source={IMAGES.calendar} style={styles.sectionIcon} />
              <Text style={styles.sectionTitle}>Recordatorios</Text>
            </View>
            {plantsNeedingWater.length > 0 && (
              <View style={styles.sectionBadge}>
                <Text style={styles.sectionBadgeText}>
                  {plantsNeedingWater.length}
                </Text>
              </View>
            )}
          </View>


          {todayPlants.length > 0 && (
            <View style={styles.reminderGroup}>
              <Text style={styles.reminderGroupTitle}>📅 Hoy</Text>
              {todayPlants.slice(0, 3).map((plant) => (
                <PlantCard
                  key={plant.id}
                  name={plant.name}
                  location={plant.location}
                  imageIndex={plant.imageIndex}
                  isActive={true}
                  daysOverdue={0}
                  onPress={() => handlePlantPress(plant.id)}
                />
              ))}
            </View>
          )}


          {tomorrowPlants.length > 0 && (
            <View style={styles.reminderGroup}>
              <Text style={styles.reminderGroupTitle}>📅 Mañana</Text>
              {tomorrowPlants.slice(0, 3).map((plant) => (
                <PlantCard
                  key={plant.id}
                  name={plant.name}
                  location={plant.location}
                  imageIndex={plant.imageIndex}
                  isActive={false}
                  onPress={() => handlePlantPress(plant.id)}
                />
              ))}
            </View>
          )}

          {plantsNeedingWater.length === 0 && todayPlants.length === 0 && tomorrowPlants.length === 0 && (
            <View style={styles.emptyCard}>
              <Image source={IMAGES.plant} style={styles.emptyIcon} />
              <Text style={styles.emptyText}>✨ ¡Todas tus plantas están felices!</Text>
            </View>
          )}

          {plantsNeedingWater.length > 3 && (
            <TouchableOpacity 
              style={styles.seeAllContainer}
              onPress={() => navigation.navigate("Reminders")}
            >
              <Text style={styles.seeAllText}>
                Ver todos los recordatorios →
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleContainer}>
              <Image source={IMAGES.plants} style={styles.sectionIcon} />
              <Text style={styles.sectionTitle}>Mis Plantas</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Plants")}>
              <Text style={styles.seeAllText}>Ver todas →</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.plantsGrid}>
            {displayPlants.map((plant) => (
              <TouchableOpacity
                key={plant.id}
                style={styles.gridItem}
                onPress={() => handlePlantPress(plant.id)}
              >
                <View style={[styles.gridImageContainer, plant.status === 'needs_watering' && styles.gridImageContainerWarning]}>
                  <Image 
                    source={IMAGES[`planta${(plant.imageIndex || 0) + 1}`] || IMAGES.planta1} 
                    style={styles.gridImage} 
                    resizeMode="cover"
                  />
                  {plant.status === 'needs_watering' && (
                    <View style={styles.gridBadge}>
                      <Text style={styles.gridBadgeText}>💧</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.gridName} numberOfLines={1}>{plant.name}</Text>
                <Text style={styles.gridLocation}>{plant.location}</Text>
              </TouchableOpacity>
            ))}
            {displayPlants.length < 6 && (
              <TouchableOpacity
                style={[styles.gridItem, styles.gridAddItem]}
                onPress={handleAddPlant}
              >
                <View style={styles.gridImageContainerAdd}>
                  <Text style={styles.gridAddIcon}>+</Text>
                </View>
                <Text style={styles.gridAddText}>Agregar</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <Image source={IMAGES.sun} style={styles.sectionIcon} />
            <Text style={styles.sectionTitle}>Consejo del día</Text>
          </View>
          <ImageBackground 
            source={IMAGES.soleado} 
            style={styles.tipBackground}
            imageStyle={styles.tipBackgroundImage}
          >
            <LinearGradient
              colors={['rgba(255,255,255,0.92)', 'rgba(255,255,255,0.85)']}
              style={styles.tipGradient}
            >
              <Image source={IMAGES.plant} style={styles.tipPlantIcon} />
              <Text style={styles.tipTitle}>
                🌿 Riega tus plantas temprano
              </Text>
              <Text style={styles.tipText}>
                El agua se absorbe mejor en la mañana y evitas quemaduras en las hojas.
              </Text>
              <View style={styles.tipTags}>
                <View style={styles.tipTag}>
                  <Text style={styles.tipTagText}>🌅 Mañana</Text>
                </View>
                <View style={styles.tipTag}>
                  <Text style={styles.tipTagText}>💧 2-3 veces/sem</Text>
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>

      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F0",
  },
  scrollContent: {
    paddingBottom: 10,
  },
  headerBackground: {
    width: '100%',
  },
  headerImage: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerGradient: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 25,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContent: {
    width: '100%',
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  headerGreeting: {
    fontSize: 26,
    fontWeight: "700",
    color: "#FFFFFF",
    lineHeight: 34,
  },
  headerSubtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "rgba(255,255,255,0.85)",
    marginTop: 2,
  },
  avatarButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarIcon: {
    width: 24,
    height: 24,
    tintColor: "#FFFFFF",
  },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  statCardWarning: {
    backgroundColor: "rgba(220, 38, 38, 0.25)",
    borderColor: "rgba(220, 38, 38, 0.2)",
  },
  statIcon: {
    width: 28,
    height: 28,
    tintColor: "#FFFFFF",
    marginBottom: 4,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  statNumberWarning: {
    color: "#FF6B6B",
  },
  statLabel: {
    fontSize: 11,
    color: "rgba(255,255,255,0.8)",
    marginTop: 2,
  },
  alertCard: {
    marginHorizontal: 20,
    marginTop: -15,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 14,
    shadowColor: "#DC2626",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    borderLeftWidth: 4,
    borderLeftColor: "#DC2626",
  },
  alertContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  alertIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FEE2E2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  alertEmoji: {
    fontSize: 22,
  },
  alertTextContainer: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1F1F1F",
  },
  alertSubtext: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  alertButton: {
    backgroundColor: "#DC2626",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  alertButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  sectionTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionIcon: {
    width: 22,
    height: 22,
    tintColor: "#2E7D32",
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1F1F1F",
  },
  sectionBadge: {
    backgroundColor: "#DC2626",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  sectionBadgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },
  reminderGroup: {
    marginBottom: 10,
  },
  reminderGroupTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
    marginBottom: 8,
  },
  plantsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 5,
  },
  gridItem: {
    width: '31%',
    alignItems: "center",
    marginBottom: 15,
  },
  gridImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 16,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden',
    position: 'relative',
  },
  gridImageContainerWarning: {
    backgroundColor: "#FEE2E2",
    borderWidth: 2,
    borderColor: "#DC2626",
  },
  gridImage: {
    width: 60,
    height: 60,
  },
  gridBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: "#DC2626",
    borderRadius: 12,
    padding: 2,
  },
  gridBadgeText: {
    fontSize: 12,
  },
  gridName: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1F1F1F",
    marginTop: 4,
    textAlign: "center",
  },
  gridLocation: {
    fontSize: 10,
    color: "#888",
    textAlign: "center",
  },
  gridAddItem: {
    opacity: 0.6,
  },
  gridImageContainerAdd: {
    width: 70,
    height: 70,
    borderRadius: 16,
    backgroundColor: "#E8ECF0",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#D8E3D2",
    borderStyle: "dashed",
  },
  gridAddIcon: {
    fontSize: 30,
    color: "#9CA3AF",
  },
  gridAddText: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
  },
  emptyCard: {
    backgroundColor: "#E8F5E9",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  emptyIcon: {
    width: 30,
    height: 30,
    tintColor: "#2E7D32",
    marginRight: 10,
  },
  emptyText: {
    fontSize: 15,
    color: "#2E7D32",
    fontWeight: "500",
  },
  seeAllContainer: {
    alignSelf: "flex-end",
    marginTop: 5,
  },
  seeAllText: {
    color: "#2E7D32",
    fontSize: 14,
    fontWeight: "600",
  },
  tipBackground: {
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: 5,
  },
  tipBackgroundImage: {
    borderRadius: 16,
  },
  tipGradient: {
    padding: 18,
    borderRadius: 16,
  },
  tipPlantIcon: {
    width: 40,
    height: 40,
    tintColor: "#2E7D32",
    marginBottom: 8,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1F1F1F",
    marginBottom: 4,
  },
  tipText: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
    marginBottom: 12,
  },
  tipTags: {
    flexDirection: "row",
    gap: 8,
  },
  tipTag: {
    backgroundColor: "#E8F5E9",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  tipTagText: {
    fontSize: 12,
    color: "#2E7D32",
    fontWeight: "500",
  },
  bottomSpacer: {
    height: 20,
  },
});