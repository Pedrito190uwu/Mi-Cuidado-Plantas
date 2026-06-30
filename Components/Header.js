import { View, Text, StyleSheet } from "react-native";

export default function Header({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? (
        <Text style={styles.subtitle}>{subtitle}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2E7D32",
  },

  subtitle: {
    marginTop: 5,
    fontSize: 16,
    color: "#666",
  },
});