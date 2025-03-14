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
		"locationId": "67d4057176c5291c11ae680c",
		"associationId": "67d4056e76c5291c11ae6809",
		"skills": [
			"first aid",
			"event management",
			"teaching"
		],
		"requiredVolunteers": 5,
		"currentVolunteers": 2,
		"coordinates": [
			36.7014097,
			3.2293304654793413
		]
	},
	{
		"locationId": "67d4057176c5291c11ae680d",
		"associationId": "67d4056e76c5291c11ae6809",
		"skills": [],
		"requiredVolunteers": 0,
		"currentVolunteers": 0,
		"coordinates": [
			36.7700535,
			3.055364365850858
		]
	},
	{
		"locationId": "67d4057176c5291c11ae680e",
		"associationId": "67d4056e76c5291c11ae6809",
		"skills": [],
		"requiredVolunteers": 0,
		"currentVolunteers": 0,
		"coordinates": [
			36.74853945,
			3.0759318861461464
		]
	},
	{
		"locationId": "67d4057176c5291c11ae680f",
		"associationId": "67d4056e76c5291c11ae6809",
		"skills": [],
		"requiredVolunteers": 0,
		"currentVolunteers": 0,
		"coordinates": [
			36.8011287,
			3.0430556
		]
	},
	{
		"locationId": "67d43394b0ca3697b1b9a939",
		"associationId": "67d43390b0ca3697b1b9a937",
		"skills": [],
		"requiredVolunteers": 0,
		"currentVolunteers": 0,
		"coordinates": [
			36.7014097,
			3.2293304654793413
		]
	},
	{
		"locationId": "67d43394b0ca3697b1b9a93a",
		"associationId": "67d43390b0ca3697b1b9a937",
		"skills": [],
		"requiredVolunteers": 0,
		"currentVolunteers": 0,
		"coordinates": [
			36.7700535,
			3.055364365850858
		]
	},
	{
		"locationId": "67d43394b0ca3697b1b9a93b",
		"associationId": "67d43390b0ca3697b1b9a937",
		"skills": [
			"first aid",
			"event management",
			"teaching"
		],
		"requiredVolunteers": 2,
		"currentVolunteers": 0,
		"coordinates": [
			36.74853945,
			3.0759318861461464
		]
	},
	{
		"locationId": "67d43394b0ca3697b1b9a93c",
		"associationId": "67d43390b0ca3697b1b9a937",
		"skills": [],
		"requiredVolunteers": 0,
		"currentVolunteers": 0,
		"coordinates": [
			36.8011287,
			3.0430556
		]
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
            title={`Association ID: ${location.associationId}`}
            description={`Volunteers: ${location.currentVolunteers}/${location.requiredVolunteers}`}
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