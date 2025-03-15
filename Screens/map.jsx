import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


const locations = [
    {
        "locationId": "67d4e4bbc5eeb5202f4c5e15",
        "associationId": "67d4e4bac5eeb5202f4c5e13",
        "skills": [],
        "coordinates": [
            36.7024722,
            3.0801951
        ],
        "name": "helping100",
        "address": "Djasr Kasentina"
    },
    {
        "locationId": "67d4e6065f4068e3e05ab4cd",
        "associationId": "67d4e6035f4068e3e05ab4cb",
        "skills": [],
        "coordinates": [
            36.793240113318475,
            3.0506175445847785
        ],
        "name": "iftar ",
        "address": "Boulevard Said Touati",
        "description": "this organisation is serving iftar everyday 2",
        "type": "Non-profit"
    },
    {
        "locationId": "67d4e6065f4068e3e05ab4ce",
        "associationId": "67d4e6035f4068e3e05ab4cb",
        "skills": [],
        "coordinates": [
            36.74853945,
            3.0759318861461464
        ],
        "name": "iftar ",
        "address": "Jardin d'Essai du Hamma, Belouizdad, Alger, Algérie",
        "description": "this organisation is serving iftar everyday 2",
        "type": "Non-profit"
    },
    {
        "locationId": "67d4e6065f4068e3e05ab4cf",
        "associationId": "67d4e6035f4068e3e05ab4cb",
        "skills": [],
        "coordinates": [
            36.765628923691764,
            3.0166992871190264
        ],
        "name": "iftar ",
        "address": "Rue Lieutenant Mohamed Benarfa, Ben Aknoun",
        "description": "this organisation is serving iftar everyday 2",
        "type": "Non-profit"
    },
    {
        "locationId": "67d4e6695f4068e3e05ab4ec",
        "associationId": "67d4e6695f4068e3e05ab4ea",
        "skills": [],
        "coordinates": [
            36.765628923691764,
            3.0166992871190264
        ],
        "name": "iftar 22",
        "address": "Rue Lieutenant Mohamed Benarfa, Ben Aknoun",
        "description": "this organisation is serving iftar everyday 2",
        "type": "Non-profit"
    }
];
const VolunteerMap = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 36.7014097,
          longitude: 3.2293304654793413,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: location.coordinates[0],
              longitude: location.coordinates[1],
            }}
            title={`Association name: ${location.name}`}
            description={`Volunteers: ${location.address}/${location.requiredVolunteers}`}
          />
        ))}
      </MapView>
     
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
  card: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
});

export default VolunteerMap;