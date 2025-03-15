import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Input from "@/components/composant/input_data";

const PaymentPopup = ({ visible, onClose }) => {
  const [selectedMethod, setSelectedMethod] = useState("Dahabia");
  const [amount, setAmount] = useState("");

  const handleConfirmDonation = async () => {
    try {
      const response = await fetch("https://mobadaraty-production.up.railway.app/api/v1/donation/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          association: "67d2d91198068e0815e96418",
          amount: parseFloat(amount),
          method: selectedMethod,
          type: "money",
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Donation successful!");
        onClose();
      } else {
        alert("Donation failed: " + data.message);
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Select a payment method</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Input name={"Amount"} handller={setAmount} />
          {/* Payment Methods */}
          <TouchableOpacity
            style={[
              styles.paymentMethod,
              selectedMethod === "Dahabia" && styles.selectedMethod,
            ]}
            onPress={() => setSelectedMethod("Dahabia")}
          >
            <View style={styles.paymentHeader}>
              <Text style={styles.paymentTitle}>Dahabia card</Text>
              {selectedMethod === "Dahabia" && (
                <Ionicons name="checkmark-circle" size={20} color="green" />
              )}
            </View>
          </TouchableOpacity>
          {[
            "Djezzy Credit",
            "Bank Transfer",
            "International Card",
          ].map((method, index) => (
            <TouchableOpacity
              key={index}
              style={styles.paymentMethod}
              onPress={() => setSelectedMethod(method)}
            >
              <View style={styles.paymentHeader}>
                <Text style={styles.paymentTitle}>{method}</Text>
                {selectedMethod === method && (
                  <Ionicons name="checkmark-circle" size={20} color="green" />
                )}
              </View>
            </TouchableOpacity>
          ))}
          {/* Charges & Total */}
          <View style={styles.summary}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalText}>{amount}DA</Text>
          </View>
          {/* Confirm Button */}
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmDonation}>
            <Text style={styles.confirmText}>Confirm Donation</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default PaymentPopup;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  closeButton: {
    padding: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    flex: 1,
  },
  paymentMethod: {
    backgroundColor: "#F9F9F9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedMethod: {
    borderColor: "green",
    borderWidth: 1,
  },
  paymentHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  paymentTitle: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  totalText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  confirmButton: {
    backgroundColor: "#2E7D32",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  confirmText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
