import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import VolunteerMap from './map';
import HomeScreen from './home';

import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const CustomHeader = () => {
  return (
    

   
    <View style={styles.header}>
      <View style={styles.topRow}>
        <View style={styles.userInfo}>
          <Image source={require('../assets/images/image 40.png')} style={styles.profilePic} />
          <View>
            <Text style={styles.greeting}>Good Morning</Text>
            <Text style={styles.username}>Mohamed</Text>
          </View>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="chatbubble-ellipses-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search here..." placeholderTextColor="#888" />
        <TouchableOpacity style={styles.searchButton}>
          <FontAwesome name="search" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>

  );
};

const HomeScreenview = ()=> <HomeScreen/>
const ProfileScreen = () => <View style={styles.screen}><Text>Home Screen</Text></View>;

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    
    <Tab.Navigator
    screenOptions={{
      header: () => <CustomHeader />,
      tabBarStyle: { backgroundColor: '#FFFFFF', height: 60 },
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'black',
    }}
  >   
<Tab.Screen 
      name="Home" 
      component={HomeScreenview} 
      options={{ 
        tabBarIcon: ({ color, size }) => (<Ionicons name="home-outline" color={color} size={size} />) 
      }} 
    />
    <Tab.Screen 
      name="Map" 
      component={VolunteerMap} 
      options={{ 
        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="map-outline" color={color} size={size} />),
        headerShown:false  
      }} 
    />
    <Tab.Screen 
      name="Profile" 
      component={ProfileScreen} 
      options={{ 
        tabBarIcon: ({ color, size }) => (<Ionicons name="person-outline" color={color} size={size} />)
      }} 
    />
      </Tab.Navigator>
    
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#A10000',
    padding: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  greeting: {
    color: 'white',
    fontSize: 14,
  },
  username: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 14,
  },
  searchButton: {
    backgroundColor: '#FFC107',
    borderRadius: 20,
    padding: 8,
    marginLeft: 5,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});