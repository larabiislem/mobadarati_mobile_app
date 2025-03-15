import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Callout } from 'react-native-maps';
import VolunteerCard from '@/components/composant/assosiation_offer';
import LocationDetails from '@/components/composant/Assosiation_detail';

const VolunteerMap = () => {
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

  return (
    <View style={styles.container}>
      {locations.length > 0 ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: locations[0]?.coordinates[0] || 36.7014097,
            longitude: locations[0]?.coordinates[1] || 3.2293304,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        >
          {locations.map((location, index) => {
            if (!location.coordinates || location.coordinates.length !== 2) {
              console.warn("Invalid coordinates:", location);
              return null;
            }

            console.log(`Rendering Marker: ${location.name}`, location.coordinates);

            return (
              <Marker
              key={location.locationId || index}
              coordinate={{
                latitude: location.coordinates[0],
                longitude: location.coordinates[1],
              }}
            >
              <Callout>
                <LocationDetails location={location}/>
              </Callout>

            </Marker>
            
            
            );
          })}
        </MapView>
      ) : (
        <Text>Loading map...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default VolunteerMap;
