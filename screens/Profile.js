import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Touchable, TouchableOpacity } from 'react-native';

const HospitalSelectionScreen = () => {
  const hospitals = [
    {
      name: 'Hospital A',
      availability: 0.8,
      freeSeats: 10,
      emergencySeats: 5,
      distance: 5,
      cost: 1000,
    },
    {
      name: 'Hospital B',
      availability: 0.6,
      freeSeats: 15,
      emergencySeats: 10,
      distance: 8,
      cost: 800,
    },
    {
      name: 'Hospital C',
      availability: 0.7,
      freeSeats: 12,
      emergencySeats: 8,
      distance: 6,
      cost: 1200,
    },
    {
      name: 'Hospital D',
      availability: 0.9,
      freeSeats: 20,
      emergencySeats: 12,
      distance: 7,
      cost: 1100,
    },
    {
      name: 'Hospital E',
      availability: 0.5,
      freeSeats: 8,
      emergencySeats: 6,
      distance: 10,
      cost: 900,
    },
    {
      name: 'Hospital F',
      availability: 0.75,
      freeSeats: 14,
      emergencySeats: 9,
      distance: 4,
      cost: 950,
    },
    {
      name: 'Hospital G',
      availability: 0.65,
      freeSeats: 18,
      emergencySeats: 11,
      distance: 9,
      cost: 850,
    },
    {
      name: 'Hospital H',
      availability: 0.85,
      freeSeats: 22,
      emergencySeats: 14,
      distance: 3,
      cost: 1300,
    },
  ];


  const [selectedHospital, setSelectedHospital] = useState(null);

  const calculateTopsis = () => {
    const maxFreeSeats = 20;
    const maxEmergencySeats = 15;
    const maxDistance = 10;
    const maxCost = 1500;

    const normalizedHospitals = hospitals.map((hospital) => ({
      availability: hospital.availability / 100,
      freeSeats: hospital.freeSeats / maxFreeSeats,
      emergencySeats: hospital.emergencySeats / maxEmergencySeats,
      distance: maxDistance - hospital.distance,
      cost: maxCost - hospital.cost,
    }));

    const weights = [0.4, 0.2, 0.2, 0.1, 0.1];
    const weightedHospitals = normalizedHospitals.map((hospital) => ({
      availability: hospital.availability * weights[0],
      freeSeats: hospital.freeSeats * weights[1],
      emergencySeats: hospital.emergencySeats * weights[2],
      distance: hospital.distance * weights[3],
      cost: hospital.cost * weights[4],
    }));

    const positiveIdeal = weightedHospitals.reduce(
      (ideal, hospital) => ({
        availability: Math.max(ideal.availability, hospital.availability),
        freeSeats: Math.max(ideal.freeSeats, hospital.freeSeats),
        emergencySeats: Math.max(ideal.emergencySeats, hospital.emergencySeats),
        distance: Math.max(ideal.distance, hospital.distance),
        cost: Math.max(ideal.cost, hospital.cost),
      }),
      {
        availability: 0,
        freeSeats: 0,
        emergencySeats: 0,
        distance: 0,
        cost: 0,
      }
    );

    const negativeIdeal = weightedHospitals.reduce(
      (ideal, hospital) => ({
        availability: Math.min(ideal.availability, hospital.availability),
        freeSeats: Math.min(ideal.freeSeats, hospital.freeSeats),
        emergencySeats: Math.min(ideal.emergencySeats, hospital.emergencySeats),
        distance: Math.min(ideal.distance, hospital.distance),
        cost: Math.min(ideal.cost, hospital.cost),
      }),
      {
        availability: 1,
        freeSeats: 1,
        emergencySeats: 1,
        distance: 1,
        cost: 1,
      }
    );

    const topsisScores = normalizedHospitals.map((hospital, index) => {
      const positiveDistance = calculateEuclideanDistance(hospital, positiveIdeal);
      const negativeDistance = calculateEuclideanDistance(hospital, negativeIdeal);
      return negativeDistance / (positiveDistance + negativeDistance);
    });

    const bestHospitalIndex = topsisScores.indexOf(Math.max(...topsisScores));
    setSelectedHospital(hospitals[bestHospitalIndex]);
  };

  
  const calculateEuclideanDistance = (hospital, ideal) => {
    return Math.sqrt(
      Object.keys(hospital).reduce((sum, criterion) => {
        return sum + Math.pow(hospital[criterion] - ideal[criterion], 2);
      }, 0)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select the best suitable hospital</Text>
      <TouchableOpacity onPress={calculateTopsis} style={styles.button}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      {selectedHospital && (
        <View style={styles.bestHospitalContainer}>
          <Text style={styles.hospitalInfoText}>Best Hospital:</Text>
          <Text style={[styles.hospitalInfoText, styles.hospitalName]}>Name: {selectedHospital.name}</Text>
          <Text style={styles.hospitalInfoText}>Availability: {selectedHospital.availability}</Text>
          <Text style={styles.hospitalInfoText}>Free Seats: {selectedHospital.freeSeats}</Text>
          <Text style={styles.hospitalInfoText}>Emergency Seats: {selectedHospital.emergencySeats}</Text>
          <Text style={styles.hospitalInfoText}>Distance: {selectedHospital.distance}</Text>
          <Text style={styles.hospitalInfoText}>Cost: {selectedHospital.cost}</Text>
        </View>
      )}
      <FlatList
        data={hospitals}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.hospitalListItem}>
            <Text style={[styles.hospitalInfoText, styles.hospitalName]}>Name: {item.name}</Text>
            <Text style={styles.hospitalInfoText}>Availability: {item.availability}</Text>
            <Text style={styles.hospitalInfoText}>Free Seats: {item.freeSeats}</Text>
            <Text style={styles.hospitalInfoText}>Emergency Seats: {item.emergencySeats}</Text>
            <Text style={styles.hospitalInfoText}>Distance: {item.distance}</Text>
            <Text style={styles.hospitalInfoText}>Cost: {item.cost}</Text>
          </View>
        )}
        style={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#eee', // Customize the container's background color
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#111', // Customize the text color
    alignSelf: 'center',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#5dbe74', 
    padding: 10,
    borderRadius: 20,
    width: '80%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  bestHospitalContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 5,
  },
  hospitalInfoText: {
    fontSize: 16,
    color: '#111', // Customize the text color
  },
  hospitalName: {
    fontWeight: 'bold',
  },
  flatListContainer: {
    marginTop: 20,
  },
  hospitalListItem: {
    marginBottom: 10,
    backgroundColor: '#fff', // Customize the list item's background color
    padding: 10,
    borderRadius: 5,
  },
});





export default HospitalSelectionScreen;