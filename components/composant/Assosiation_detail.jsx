import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LocationDetails = ({ location, onRequest }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{location.name}</Text>
      <Text style={styles.address}>📍 {location.address}</Text>
      <Text style={styles.skills}>🛠 Skills: {location.skills.length > 0 ? location.skills.join(", ") : "No skills listed"}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onRequest(location)}>
        <Text style={styles.buttonText}>Request</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  skills: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#2F7B2B",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LocationDetails;
