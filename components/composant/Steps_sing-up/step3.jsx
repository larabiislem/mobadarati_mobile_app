import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Input from '../input_data';

const SignUpScreen = () => {
  const [password, setPassword] = useState('');
  const [isAdult, setIsAdult] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);

  return (
    <View style={styles.container}>
      

      <View style={styles.avatarContainer}>
        <TouchableOpacity style={styles.avatarButton}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>

      <Input name="Name"  />
      <Input name="Number" />

      <View>
        <Input name="Password" />
        {password.length < 8 && password.length > 0 && (
          <Text style={styles.errorText}>Password must be at least 8 characters long</Text>
        )}
      </View>

      <Input name="Confirm password" />

    

      <View style={styles.checkboxContainer}>
       
        <Text style={styles.checkboxText}>Are you over the age of 18?</Text>
      </View>

      <View style={styles.checkboxContainer}>
   
        <Text style={styles.checkboxText}>I Agree to <Text style={styles.policyText}>Privacy Policy</Text></Text>
      </View>

      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpText}>Sign up</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or</Text>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleText}>Sign up with Google</Text>
      </TouchableOpacity>

      <Text style={styles.signInText}>
        Already have an account? <Text style={styles.signInLink}>Sign in</Text>
      </Text>
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
