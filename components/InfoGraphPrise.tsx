import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as Progress from 'react-native-progress';

const InfoGraphPrise: React.FC = () => {
  const labels = ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7'];

  return (
    <View style={styles.container}>
      <View style={styles.positionValue}>
        {labels.map((label, index) => (
          <View key={index} style={styles.progressBarContainer}>
            <Text style={styles.label}>{label}</Text>
            <Progress.Bar 
              progress={index === 3 || index === 5 ? 0.5 : 1} 
              width={141} 
              height={8} 
              color={index >= 5 ? '#FF445D' : '#2CE080'} 
              unfilledColor="#FFAF87" 
              borderWidth={0} 
              style={styles.progressBar} 
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 358,
    height: 248.83,
    borderRadius: 9.14,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    opacity: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#E6EAED',
  },
  positionValue: {
    position: 'absolute',
    left: '32%',
    transform: [{ rotate: '-90deg' }], // Centrer et tourner
  },
  progressBarContainer: {
    marginBottom: 30, // Espacement entre chaque barre de progression
    flexDirection: 'row', // Afficher la légende à côté de la barre
    alignItems: 'center', // Centrer verticalement la légende et la barre
  },
  progressBar: {
    marginLeft: 10, // Espacement entre la légende et la barre
  },
  label: {
    transform: [{ rotate: '90deg' }],
    fontSize: 12,
    color: '#000000',
  },
});

export default InfoGraphPrise;
