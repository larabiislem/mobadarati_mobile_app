import { View , StyleSheet ,TouchableOpacity, Image,FlatList} from "react-native";
import TopServices from "@/components/composant/TopService";
import VolunteerCard from "@/components/composant/assosiation_offer";
import { ScrollView } from "react-native";
import donate from '../assets/images/Group 84 (1).png'
import { useNavigation } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState,useEffect } from "react";





export default function HomeScreen ()
 {
  const [invites, setInvites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [matchedLocations, setMatchedLocations] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchInvites = async () => {
      try {
        
        const token = await AsyncStorage.getItem('accessToken');
        if (!token) {
          throw new Error('No token found');
        }
        const response = await fetch(
          'https://mobadaraty-production.up.railway.app/api/v1/volunteer/getinvites',
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setInvites(data);
        console.log('we have data')
      } catch (err) {
        alert('error',err)
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchInvites();
  }, []);



  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch('https://mobadaraty-production.up.railway.app/api/v1/auth/getlocations');
        const data = await response.json();
       

        if (Array.isArray(data)) {
          setLocations(data);
        } else {
          alert("API response is not an array: " );
        }
      } catch (error) {
        alert('Error fetching locations: ' + error);
      }
    };

    fetchLocations();
  }, []);
//
const data1 = [
  {
      "locationId": "67d4e4bbc5eeb5202f4c5e15",
      "associationId": "67d4e4bac5eeb5202f4c5e13",
      "distance_km": 4.08,
      "skills_matched": [
          "Organization"
      ]
  },
  {
      "locationId": "67d4e7115f4068e3e05ab504",
      "associationId": "67d4e7105f4068e3e05ab502",
      "distance_km": 4.19,
      "skills_matched": [
          "Cooking"
      ]
  },
  {
      "locationId": "67d4e6065f4068e3e05ab4ce",
      "associationId": "67d4e6035f4068e3e05ab4cb",
      "distance_km": 5.7,
      "skills_matched": [
          "Organization"
      ]
  },
  {
      "locationId": "67d4e6065f4068e3e05ab4cf",
      "associationId": "67d4e6035f4068e3e05ab4cb",
      "distance_km": 6.51,
      "skills_matched": [
          "Organization"
      ]
  }
];

useEffect(()=>{
  
  const data2=locations;
  const combinedData = data1.map(invite => {
    const locationMatch = data2.find(loc => loc.locationId === invite.locationId);
    if (locationMatch) {
      return {
        locationId: invite.locationId,
        associationId: invite.associationId,
        name: locationMatch.name,
        address: locationMatch.address,
        distance: invite.distance_km,
        skills_matched: invite.skills_matched,
        type: locationMatch.type || "Unknown"
      };
    }
    return null;
  }).filter(item => item !== null);
  
  setMatchedLocations(combinedData);
 


},[locations,invites])
  
  return (
    
        
    <View style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false} style={{overflow:'hidden'}}>
        <View style={styles.topService}>
            <TopServices />
        </View>
      <View >
        <FlatList
          data={matchedLocations}
          keyExtractor={item => item.locationId}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <VolunteerCard 
              name={item.name} 
              skills={item.skills_matched.join(", ")} 
              distance={item.distance} 
              address={item.address} 
            />
          )}
        />
    
    
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Donate')}>
      <Image source={donate} style={{margin:40}}/>
       
      </TouchableOpacity>
      
      </ScrollView>
      
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topService:{
    marginBottom:50
  }
});




