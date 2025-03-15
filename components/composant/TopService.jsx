import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const services = [
  { name: 'Cooking', image: require('../../assets/images/image 22.png') },
  { name: 'Delivery', image: require('../../assets/images/image 23.png') },
  { name: 'Waiter', image: require('../../assets/images/image 24.png') },
  { name: 'Wash Dishes', image: require('../../assets/images/image 25.png') }
];

const TopServices = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top services on map</Text>
      <View style={styles.grid}>
        {services.map((service, index) => (
          <TouchableOpacity key={index} style={styles.serviceBox}>
            <Image source={service.image} style={styles.icon} />
            <Text style={styles.serviceText}>{service.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    alignItems: 'center',
    marginTop:350
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  serviceBox: {
    width: '45%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  serviceText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TopServices;