import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import PaymentPopup from '../Screens/payment_donate';

const DonationCard = ({handller}) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  return (
    <TouchableOpacity onPress={handller}>
      <View style={styles.card}>
        {/* Image */}
        <Image source={require('../assets/images/image 89.png')} style={styles.image} />

        {/* Texte */}
        <View style={styles.content}>
          <Text style={styles.title}>Helping elderly to get their Medical needs</Text>
          <Text style={styles.description}>
            We raised money to help more than 600 elderly that needed to get medicines and we covered their bills.
          </Text>

          {/* Montant collecté */}
          <Text style={styles.amount}>52,650 / 70,000 DA</Text>

          {/* Bouton et icônes */}
          <View style={styles.bottomRow}>
            <TouchableOpacity style={styles.donateButton} onPress={() => setPopupVisible(true)}>
              <Text style={styles.donateText}>Donate</Text>
            </TouchableOpacity>

            <View style={styles.icons}>
              <TouchableOpacity style={styles.icon}>
                <Ionicons name="bookmark-outline" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon}>
                <FontAwesome name="share-alt" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* Payment Popup */}
      <PaymentPopup visible={isPopupVisible} onClose={() => setPopupVisible(false)} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 3,
    width: 300,
    margin: 10,
    borderWidth:1,
    borderColor:'black',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 12,
    color: 'gray',
    marginVertical: 5,
  },
  progressContainer: {
    height: 5,
    backgroundColor: '#FFD700',
    borderRadius: 5,
    marginTop: 5,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#A10000',
    borderRadius: 5,
  },
  amount: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  donateButton: {
    backgroundColor: 'green',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  donateText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
  },
});

export default DonationCard;
