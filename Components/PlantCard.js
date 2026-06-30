import { View, Text, StyleSheet } from "react-native";

export default function PlantCard({
  name,
  status,
  time,
}) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>

      <Text style={styles.time}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2F4F2F",
  },

  status: {
    marginTop: 5,
    color: "#777",
    fontSize: 14,
  },

  time: {
    color: "#4CAF50",
    fontWeight: "bold",
    fontSize: 15, 
  },
});