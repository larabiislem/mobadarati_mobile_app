import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import PaymentPopup from './payment_donate';

const DonationDetails = () => {
    const navigation = useNavigation();
    const [isPopupVisible, setPopupVisible] = useState(false);

    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="bookmark-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.detailcontainer}>
               
                <Image source={require('../assets/images/image 89.png')} style={styles.image} />
               
                <Text style={styles.title}>Helping elderly to get their Medical needs</Text>
               
                <Text style={styles.description}>
                    We raised money to help more than 600 elderly that needed to get medicines and we covered their bills.
                    <Text style={styles.readMore}> Read more</Text>
                </Text>
               
                <TouchableOpacity style={styles.donateButton} onPress={() => setPopupVisible(true)}>
                    <Text style={styles.donateText}>Donate</Text>
                </TouchableOpacity>
            </View>
           
            <PaymentPopup visible={isPopupVisible} onClose={() => setPopupVisible(false)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 15,
        flexDirection: 'column',
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
        marginBottom: 40,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    description: {
        fontSize: 14,
        color: 'gray',
        marginLeft: 14,
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
        width: 252,
    },
    donateText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    detailcontainer: {
        flex: 1,
        marginTop: 50,
        alignItems: 'center',
    },
});

export default DonationDetails;
