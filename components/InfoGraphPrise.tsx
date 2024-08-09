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
      <View style={styles.legendes}>
        <View style={styles.legendItem}>
          <View style={[styles.ColorLegend, { backgroundColor: '#2CE080' }]} />
          <Text style={styles.legendText}>Prise validée</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.ColorLegend, { backgroundColor: '#FFAF87' }]} />
          <Text style={styles.legendText}>Prise en retard</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.ColorLegend, { backgroundColor: '#FF445D' }]} />
          <Text style={styles.legendText}>Prise manquée</Text>
        </View>
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
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#E6EAED',
    paddingBottom: 1,
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
  legendes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  legendItem: {
    top: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ColorLegend: {
    width: 24.9,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  legendText: {
    fontSize: 10,
    color: '#03314B',
    fontFamily: 'Cera Pro', 
    fontWeight: '500',
    lineHeight: 20.11,
    textAlign:'center'
  },
});

export default InfoGraphPrise;
