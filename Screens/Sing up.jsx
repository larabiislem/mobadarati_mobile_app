import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ProgressBar from 'react-native-progress/Bar'; // Importing ProgressBar from react-native-progress
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Step 1: First Screen
const Step1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <ProgressBar progress={0.3} width={300} height={10} color="#417FFC" unfilledColor = "#D9D9D9" 
      borderWidth={0}
      />
      <Text style={styles.step_text}>Step 1/3</Text>
      <Button title="Next" onPress={() => navigation.navigate('Step2')} />
    </View>
  );
};

// Step 2: Second Screen
const Step2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <ProgressBar progress={0.6} width={300} height={10} color="#417FFC"unfilledColor = "#D9D9D9" 
      borderWidth={0} />
      <Text style={styles.step_text}>Step 2/3 </Text>
      <Button title="Next" onPress={() => navigation.navigate('Step3')} />
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

// Step 3: Third Screen
const Step3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <ProgressBar progress={1} width={300} height={10} color="#417FFC" unfilledColor = "#D9D9D9" 
      borderWidth={0} />
      <Text style={styles.step_text} >Step 3/3</Text>
      <Button title="Next" onPress={() => navigation.navigate('Step4')} />
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};


// Create a Stack Navigator
const Stack = createStackNavigator();

const Singe = () => {
  return (
    
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Step1" component={Step1} />
        <Stack.Screen name="Step2" component={Step2} />
        <Stack.Screen name="Step3" component={Step3} />
        
      </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    padding: 20,
  },
  proc:{
    backgroundColor:'gray'
  },
  step_text:{
    marginTop:15,
    color :"#417FFC"
  }
});

export default Singe;