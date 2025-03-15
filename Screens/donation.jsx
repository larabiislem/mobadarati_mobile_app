import React from 'react';
import { View, Text, ScrollView, StyleSheet,Image, TouchableOpacity } from 'react-native';
import DonationCard from '../components/Donation_offer';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


const Donationscreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
     
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
     

     
        
    <ScrollView style={{overflow:'hidden'}} showsVerticalScrollIndicator={false} >
        
        
      {/* Section Money Donations */}
      <Text style={styles.sectionTitle}>Money Donations 💰</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        <DonationCard handller={()=>navigation.navigate("Donation_details")}/>
        <DonationCard handller={()=>navigation.navigate("Donation_details")}/>
        <DonationCard handller={()=>navigation.navigate("Donation_details")}/>
      </ScrollView>

      {/* Section Items Donations */}
      <Text style={styles.sectionTitle}>Items Donations 🎁</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        <DonationCard />
        <DonationCard />
        <DonationCard />
      </ScrollView>
    </ScrollView>

    </View>

   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  
  hederimage:{
    width: '100%',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 5,
  },
  horizontalScroll: {
    flexDirection: 'row',
  },
  backButton: {
    
    padding: 8,
   
  },
  headercontainer:{
    flexDirection: 'row',
    justifyContent:'center',
    paddingLeft:15,
    paddingRight:15

  }
});

export default Donationscreen;