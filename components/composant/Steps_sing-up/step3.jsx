import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { ScrollView } from 'react-native';
import Input from '../input_data';

const SignUpScreen = ({ selectedSkills }) => {
  // État regroupé pour tous les champs de texte
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    volunteerType :'',
    national_card_number:'',
    city:''
  });


  console.log(JSON.stringify({
    selectedSkills,
    formState,
  }))

  const [isAdult, setIsAdult] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);

  // Fonction pour mettre à jour les champs de texte
  const handleInputChange = (field, value) => {
    setFormState({
      ...formState,
      [field]: value,
    });
  };

  const handleSignUp = async () => {
    const { password, confirmPassword, name, number, email } = formState;

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (!isAdult || !agreePolicy) {
      Alert.alert('Error', 'You must be over 18 and agree to the privacy policy');
      return;
    }

    try {
      const response = await fetch('https://mobadaraty-production.up.railway.app/api/v1/auth/volunteer/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          selectedSkills,
          formState,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'Account created successfully');
        // Navigate to the next screen or login screen
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

        
      <View style={styles.avatarContainer}>
        <TouchableOpacity style={styles.avatarButton}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Champs de texte avec gestion centralisée */}
      <Input name="Name" value={formState.name} handller={(value) => handleInputChange('name', value)} />
      <Input name="Email" value={formState.email} handller={(value) => handleInputChange('email', value)} />
      <Input name="phone" value={formState.phone} handller={(value) => handleInputChange('phone', value)} />
      <Input name="national_card_number" value={formState.national_card_number} handller={(value) => handleInputChange('national_card_number', value)} />
      <Input name="city" value={formState.phone} handller={(value) => handleInputChange('city', value)} />
      <Input name="volunteerType" value={formState.volunteerType} handller={(value) => handleInputChange('volunteerType', value)} />

      <View>
        <Input
          name="Password"
          value={formState.password}
          handller={(value) => handleInputChange('password', value)}
          secureTextEntry
        />
        {formState.password.length < 8 && formState.password.length > 0 && (
          <Text style={styles.errorText}>Password must be at least 8 characters long</Text>
        )}
      </View>

      <Input
        name="Confirm password"
        handller={(value) => handleInputChange('confirmPassword', value)}
        secureTextEntry
      />

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

// Les styles restent les mêmes
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
    },
    avatarContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    avatarButton: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#ccc',
      justifyContent: 'center',
      alignItems: 'center',
    },
    plusText: {
      fontSize: 24,
      color: '#fff',
    },
    errorText: {
      color: 'red',
      fontSize: 12,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    checkboxText: {
      marginLeft: 10,
    },
    policyText: {
      color: 'blue',
    },
    signUpButton: {
      backgroundColor: '#007bff',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 20,
    },
    signUpText: {
      color: '#fff',
      fontSize: 16,
    },
    orText: {
      textAlign: 'center',
      marginVertical: 10,
    },
    googleButton: {
      backgroundColor: '#db4437',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
    },
    googleText: {
      color: '#fff',
      fontSize: 16,
    },
    signInText: {
      textAlign: 'center',
      marginTop: 20,
    },
    signInLink: {
      color: '#007bff',
    },
  });
  
export default SignUpScreen;