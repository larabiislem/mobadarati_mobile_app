import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import Picker from the new package
import Input from '../input_data';

const SignUpScreen = ({ selectedSkills }) => {
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
    volunteerType: '',
    specialToken: '',
    location: '',
  });

  const [isAdult, setIsAdult] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);

  const handleInputChange = (field, value) => {
    setFormState({
      ...formState,
      [field]: value,
    });
  };

  const handleAvailabilityChange = (value) => {
    const updatedAvailability = formState.availability.includes(value)
      ? formState.availability.filter((item) => item !== value)
      : [...formState.availability, value];
    setFormState({
      ...formState,
      availability: updatedAvailability,
    });
  };

  const handleSignUp = async () => {
    const { password, confirmPassword, specialToken, availability, volunteerType } = formState;

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

   
    if (availability.length === 0) {
      Alert.alert('Error', 'Please select at least one availability option');
      return;
    }

    if (!volunteerType) {
      Alert.alert('Error', 'Please select a volunteer type');
      return;
    }

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
      <ScrollView>
        <Input name="Full Name" value={formState.fullName} handller={(value) => handleInputChange('fullName', value)} />
        <Input name="Email" value={formState.email} handller={(value) => handleInputChange('email', value)} />
        <Input name="Phone" value={formState.phone} handller={(value) => handleInputChange('phone', value)} />
        <Input name="Date of Birth (YYYY-MM-DD)" value={formState.dateOfBirth} handller={(value) => handleInputChange('dateOfBirth', value)} />
        <Input name="National Card Number" value={formState.nationalCardNumber} handller={(value) => handleInputChange('nationalCardNumber', value)} />
        <Input name="City" value={formState.city} handller={(value) => handleInputChange('city', value)} />
        <Input name="Location" value={formState.location} handller={(value) => handleInputChange('location', value)} />

        {/* Availability Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Availability</Text>
          {["morning", "afternoon", "evening"].map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.availabilityOption,
                formState.availability.includes(option) && styles.selectedAvailability,
              ]}
              onPress={() => handleAvailabilityChange(option)}
            >
              <Text style={styles.availabilityText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Volunteer Type Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Volunteer Type</Text>
          <Picker
            selectedValue={formState.volunteerType}
            style={styles.picker}
            onValueChange={(value) => handleInputChange('volunteerType', value)}
          >
            <Picker.Item label="Select Volunteer Type" value="" />
            <Picker.Item label="Independent" value="independent" />
            <Picker.Item label="Association Member" value="association_member" />
          </Picker>
        </View>

        <Input name="Special Token" value={formState.specialToken} handller={(value) => handleInputChange('specialToken', value)} secureTextEntry />

        <View>
          <Input name="Password" value={formState.password} handller={(value) => handleInputChange('password', value)} secureTextEntry />
          {formState.password.length < 8 && formState.password.length > 0 && (
            <Text style={styles.errorText}>Password must be at least 8 characters long</Text>
          )}
        </View>

        <Input name="Confirm password" value={formState.confirmPassword} handller={(value) => handleInputChange('confirmPassword', value)} secureTextEntry />

        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={() => setIsAdult(!isAdult)}>
            <Text style={styles.checkboxText}>Are you over the age of 18?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={() => setAgreePolicy(!agreePolicy)}>
            <Text style={styles.checkboxText}>I Agree to <Text style={styles.policyText}>Privacy Policy</Text></Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or</Text>

        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleText}>Sign up with Google</Text>
        </TouchableOpacity>

        <Text style={styles.signInText}>
          Already have an account? <Text style={styles.signInLink}>Sign in</Text>
        </Text>
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
  inputContainer: {
    width: '90%',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  availabilityOption: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  selectedAvailability: {
    backgroundColor: '#D9D9D9',
  },
  availabilityText: {
    fontSize: 14,
  },
  picker: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 14,
  },
  policyText: {
    color: 'green',
    fontWeight: 'bold',
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
  },
  orText: {
    marginVertical: 10,
    fontSize: 14,
  },
  googleButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    alignItems: 'center',
  },
  googleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  signInText: {
    marginTop: 20,
    fontSize: 14,
  },
  signInLink: {
    color: '#FFA500',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;