import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DonationDetails = () => {
  return (
    <View style={styles.container}>
      {/* Header avec icônes */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="bookmark-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
        <View style={styles.detailcontainer}>
        {/* Image principale */}
        <Image source={require('../assets/images/image 89.png')} style={styles.image} />

        {/* Détails du don */}
        <Text style={styles.title}>Helping elderly to get their Medical needs</Text>


        {/* Description */}
        <Text style={styles.description}>
        We raised money to help more than 600 elderly that needed to get medicines and we covered their bills. 
        <Text style={styles.readMore}> Read more</Text>
        </Text>

        {/* Bouton Donate */}
        <TouchableOpacity style={styles.donateButton}>
        <Text style={styles.donateText}>Donate</Text>
</TouchableOpacity>
            
        </View>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 15,
    flexDirection:'column',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom:40
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    
  },
  associationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    marginVertical: 10,
  },
  associationLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  associationName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  verifiedText: {
    color: 'gray',
  },
  description: {
    fontSize: 14,
    color: 'gray',
    marginLeft:14
  },
  readMore: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  donateButton: {
    backgroundColor: '#2E7D32',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    width:252
  },
  donateText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailcontainer:
  {
    flex: 1,
    marginTop:50,
    alignItems:'center'
  }
});

export default DonationDetails;
