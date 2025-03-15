import React from 'react';
import { View, Text, ScrollView, StyleSheet,Image } from 'react-native';
import DonationCard from '../components/Donation_offer';

const Donationscreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Image source={require('../assets/images/image 90.png')} style={styles.hederimage} />
      {/* Section Money Donations */}
      <Text style={styles.sectionTitle}>Money Donations 💰</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        <DonationCard />
        <DonationCard />
        <DonationCard />
      </ScrollView>

      {/* Section Items Donations */}
      <Text style={styles.sectionTitle}>Items Donations 🎁</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        <DonationCard />
        <DonationCard />
        <DonationCard />
      </ScrollView>
    </ScrollView>
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
});

export default Donationscreen;