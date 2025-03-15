import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Card, ListItem } from 'react-native-elements';
/*
 <Card containerStyle={styles.card}>
        <Card.Title>Volunteer Locations</Card.Title>
        <Card.Divider />
        {locations.map((location, index) => (
          <ListItem key={index} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{location.associationId}</ListItem.Title>
              <ListItem.Subtitle>
                Volunteers: {location.currentVolunteers}/{location.requiredVolunteers}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </Card>

*/

const locations = [
	{
		"locationId": "67d4c6d0a1f55e61aa451488",
		"associationId": "67d4c6cea1f55e61aa451486",
		"coordinates": [
			36.7014097,
			3.2293304654793413
		],
		"name": "helping10",
		"address": "Aéroport international d'Alger Houari Boumédiene, Alger, Algérie"
	},
	{
		"locationId": "67d4c6d0a1f55e61aa451489",
		"associationId": "67d4c6cea1f55e61aa451486",
		"coordinates": [
			36.697897039349165,
			3.0800765625861253
		],
		"name": "helping10",
		"address": "Rue des Grossistes, Djasr Kasentina"
	},
	{
		"locationId": "67d4c800a1f55e61aa451493",
		"associationId": "67d4c7fea1f55e61aa451491",
		"coordinates": [
			36.7024722,
			3.0801951
		],
		"name": "helping5",
		"address": "Djasr Kasentina"
	},
	{
		"locationId": "67d4c800a1f55e61aa451494",
		"associationId": "67d4c7fea1f55e61aa451491",
		"coordinates": [
			36.66979205,
			3.1001751113197673
		],
		"name": "helping5",
		"address": "Baraki alger"
	},
	{
		"locationId": "67d4c816a1f55e61aa4514a1",
		"associationId": "67d4c814a1f55e61aa45149f",
		"coordinates": [
			36.74601775,
			3.0724042540842955
		],
		"name": "helping50",
		"address": "Rue Mohamed Belouizdad, Alger"
	},
	{
		"locationId": "67d4c816a1f55e61aa4514a2",
		"associationId": "67d4c814a1f55e61aa45149f",
		"coordinates": [
			36.7441968,
			3.07822
		],
		"name": "helping50",
		"address": "N11, Belouizdad 16000"
	},
	{
		"locationId": "67d4c836a1f55e61aa4514af",
		"associationId": "67d4c834a1f55e61aa4514ad",
		"coordinates": [
			36.7220068,
			3.1856291
		],
		"name": "helping1000",
		"address": "Bab Ezzouar"
	},
	{
		"locationId": "67d4c836a1f55e61aa4514b0",
		"associationId": "67d4c834a1f55e61aa4514ad",
		"coordinates": [
			36.74601775,
			3.0724042540842955
		],
		"name": "helping1000",
		"address": "Rue Mohamed Belouizdad, Alger"
	},
	{
		"locationId": "67d4c836a1f55e61aa4514b1",
		"associationId": "67d4c834a1f55e61aa4514ad",
		"coordinates": [
			36.7441968,
			3.07822
		],
		"name": "helping1000",
		"address": "N11, Belouizdad 16000"
	},
	{
		"locationId": "67d4c850a1f55e61aa4514c3",
		"associationId": "67d4c84fa1f55e61aa4514c1",
		"coordinates": [
			36.7024722,
			3.0801951
		],
		"name": "iftar",
		"address": "Djasr Kasentina"
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