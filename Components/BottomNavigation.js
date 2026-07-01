import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { IMAGES } from "../constants/images";

const BottomNavigation = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const menuItems = [
    { name: "Inicio", icon: IMAGES.home, screen: "Home", active: route.name === "Home" },
    { name: "Mis plantas", icon: IMAGES.plants, screen: "Plants", active: route.name === "Plants" },
    { name: "Cuidados", icon: IMAGES.care, screen: "Care", active: route.name === "Care" },
    { name: "Recordatorios", icon: IMAGES.reminders, screen: "Reminders", active: route.name === "Reminders" },
    { name: "Perfil", icon: IMAGES.profile, screen: "Profile", active: route.name === "Profile" },
  ];

  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.menuItem} 
          onPress={() => navigation.navigate(item.screen)}
        >
          <Image 
            source={item.icon} 
            style={[styles.icon, item.active && styles.activeIcon]} 
            resizeMode="contain" 
          />
          <Text style={[styles.label, item.active && styles.activeLabel]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: "#E8ECF0",
    justifyContent: "space-around",
    alignItems: "center",
  },
  menuItem: { 
    alignItems: "center", 
    paddingVertical: 4, 
    paddingHorizontal: 6 
  },
  icon: { 
    width: 26, 
    height: 26, 
    tintColor: "#9CA3AF" 
  },
  activeIcon: { 
    tintColor: "#2E7D32" 
  },
  label: { 
    fontSize: 11, 
    color: "#9CA3AF", 
    marginTop: 4, 
    fontWeight: "500" 
  },
  activeLabel: { 
    color: "#2E7D32", 
    fontWeight: "600" 
  },
});

export default BottomNavigation;