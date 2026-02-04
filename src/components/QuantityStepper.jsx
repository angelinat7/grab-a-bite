import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function QuantityStepper({
  quantity,
  onIncrement,
  onDecrement,
}) {
  const disabled = quantity < 1;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, disabled && styles.buttonDisabled]}
        onPress={onDecrement}
      >
        <Text style={[styles.buttonText, disabled && styles.buttonDisabled]}>
          <Ionicons name="remove" size={24} color="#fff" />
        </Text>
      </TouchableOpacity>
      <View style={styles.qtyContainer}>
        <Text style={styles.qtyText}>{quantity}</Text>
      </View>
      <TouchableOpacity style={[styles.button]} onPress={onIncrement}>
        <Text style={[styles.buttonText]}>
          <Ionicons name="add" size={24} color="#fff" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    overflow: "hidden",
  },
  button: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007AFF",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonTextDisabled: {
    color: "#999",
  },
  qtyContainer: {
    paddingHorizontal: 16,
    backgroundColor: "#f5f5f5",
  },
  qtyText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});
