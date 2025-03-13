import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AccountSelectionScreen = () => {
  const [selected, setSelected] = useState('volunteer1');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>
      <Text style={styles.subtitle}>Which type of account would you like?</Text>

      <TouchableOpacity 
        style={[styles.option, selected === 'volunteer1' ? styles.selected : null]} 
        onPress={() => setSelected('volunteer1')}
      >
        <Text style={styles.optionText}>Volunteer</Text>
        <Text style={styles.optionSubText}>I'm looking to volunteer</Text>
        {selected === 'volunteer1' && <Text style={styles.checkmark}>✔</Text>}
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.option, selected === 'volunteer2' ? styles.selected : null]} 
        onPress={() => setSelected('volunteer2')}
      >
        <Text style={styles.optionText}>Volunteer</Text>
        <Text style={styles.optionSubText}>I'm looking to volunteer</Text>
        {selected === 'volunteer2' && <Text style={styles.checkmark}>✔</Text>}
      </TouchableOpacity>

      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  option: {
    width: '80%',
    padding: 20,
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    borderColor: '#000',
  },
  selected: {
    backgroundColor: '#B22222',
    borderColor: '#B22222',
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionSubText: {
    fontSize: 14,
  },
  checkmark: {
    fontSize: 20,
    position: 'absolute',
    right: 20,
    top: '50%',
    transform: [{ translateY: -10 }],
    color: 'white',
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AccountSelectionScreen;
