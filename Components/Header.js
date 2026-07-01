import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { IMAGES } from "../constants/images";

export default function Header({ title, subtitle, showAvatar = false }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
        {showAvatar && (
          <TouchableOpacity style={styles.avatarContainer}>
            <Image source={IMAGES.profile} style={styles.avatar} resizeMode="contain" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 50, marginBottom: 20, paddingHorizontal: 20 },
  headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  textContainer: { flex: 1 },
  title: { fontSize: 22, fontWeight: "700", color: "#1F1F1F", lineHeight: 30 },
  subtitle: { marginTop: 6, fontSize: 16, fontWeight: "600", color: "#2E7D32" },
  avatarContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  avatar: { width: 24, height: 24, tintColor: "#2E7D32" },
});