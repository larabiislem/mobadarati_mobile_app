import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import { useNavigation } from '@react-navigation/native';
import Input from '../input_data';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SignUpScreen = ({ selectedSkills }) => {
  const navigation = useNavigation();
  const [formState, setFormState] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    nationalCardNumber: '',
    city: '',
    availability: [],
    volunteerType: 'Independent',
    specialToken: '',
    location: '',
  });



  const handleInputChange = (field, value) => {
    setFormState({
      ...formState,
      [field]: value,
    });
  };

  const handleSignUp = async () => {
    try {
      const { fullName, phone, email, password, dateOfBirth, nationalCardNumber, city, availability, volunteerType, specialToken, location } = formState;

      const response = await fetch('https://mobadaraty-production.up.railway.app/api/v1/auth/volunteer/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          phone,
          fullName,
          dateOfBirth,
          nationalCardNumber,
          skills: selectedSkills,
          availability,
          volunteerType,
          city,
          location,
          specialToken,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        Alert.alert('Success', 'Account created successfully');
      } else {
        Alert.alert('Error', data.message || 'Something went wrong');
      }
    } catch (error) {
      Alert.alert('Error', 'Network error');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <ScrollView style={{ overflow: 'hidden' }} showsVerticalScrollIndicator={false}>
        <Input name="Full Name" value={formState.fullName} handller={(value) => handleInputChange('fullName', value)} />
        <Input name="Email" value={formState.email} handller={(value) => handleInputChange('email', value)} />
        <Input name="Phone" value={formState.phone} handller={(value) => handleInputChange('phone', value)} />
        <Input name="Date of Birth (YYYY-MM-DD)" value={formState.dateOfBirth} handller={(value) => handleInputChange('dateOfBirth', value)} />
        <Input name="National Card Number" value={formState.nationalCardNumber} handller={(value) => handleInputChange('nationalCardNumber', value)} />
        <Input name="City" value={formState.city} handller={(value) => handleInputChange('city', value)} />
        <Input name="Location" value={formState.location} handller={(value) => handleInputChange('location', value)} />

        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 10,
    zIndex: 10,
  },
  signUpButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
  },
  signUpText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default SignUpScreen;
