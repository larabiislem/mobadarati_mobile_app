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
        

        
      <View style={styles.avatarContainer}>
        <TouchableOpacity style={styles.avatarButton}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 20,
    },
    stepText: {
      color: '#4169E1',
      marginTop: 5,
    },
    avatarContainer: {
      alignItems: 'center',
      marginVertical: 20,
    },
    avatarButton: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: '#D9D9D9',
      justifyContent: 'center',
      alignItems: 'center',
    },
    plusText: {
      fontSize: 30,
      color: '#000',
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