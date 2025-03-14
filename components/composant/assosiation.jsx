import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import Assotiation_pic from '../../assets/images/image 43.png'

 
const VolunteerCard = () => {
  return (
    <View style={styles.card}>

     <Image source={Assotiation_pic} style={styles.image} />
      <View style={styles.locationTag}>
        <FontAwesome5 name="map-marker-alt" size={14} color="white" />
        <Text style={styles.locationText}>Alger</Text>
      </View>
      <Text style={styles.title}>Volunteer at Mat3am Rahma</Text>
      <View style={styles.details}>
        <View style={styles.detailRow}>
          <MaterialIcons name="event" size={16} color="#666" />
          <Text style={styles.detailText}>Sun. 11/2025</Text>
        </View>
        <View style={styles.detailRow}>
          <FontAwesome5 name="clock" size={16} color="#666" />
          <Text style={styles.detailText}>4hours shift</Text>
        </View>
        <View style={styles.detailRow}>
        <FontAwesome5 name="tasks" size={16} color="black" />
          <Text style={styles.detailText}>Start 09pm</Text>
        </View>
        <View style={styles.detailRow}>
          <FontAwesome5 name="clock" size={16} color="red" />
          <Text style={styles.detailText}>End 12am</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.requestButton}>
          <Text style={styles.buttonText}>Request</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.moreText}>Know more...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    width: 250,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  locationTag: {
    flexDirection: 'row',
    backgroundColor: 'green',
    position: 'absolute',
    top: 10,
    left: 10,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 5,
  },
  locationText: {
    color: 'white',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  details: {
    marginTop: 10,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  detailText: {
    marginLeft: 5,
    color: '#666',
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  requestButton: {
    backgroundColor: '#FFA500',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  moreText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default VolunteerCard;
