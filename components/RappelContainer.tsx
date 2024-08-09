import React from 'react';
import { View, Text, StyleSheet, Image, ViewStyle } from 'react-native';

const medicin = require('../assets/medicin.png');

interface RappelMedicin {
  text: string;
}

const RappelContainer: React.FC<RappelMedicin> = ({text}) => {
  return (
    <View style={styles.container}>
      <Image source={medicin} style={styles.Image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 358,
    height: 86,
    borderRadius: 9.14,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    opacity: 1,
    backgroundColor: '#F0EEFE',
    flexDirection: 'row', // Dispose les enfants en ligne (horizontalement)
    alignItems: 'center', // Centre verticalement le contenu
    paddingHorizontal: 16, // Ajouter du padding horizontal pour bien espacer l'image et le texte
  },
  text: {
    fontFamily: 'Cera Pro', 
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: '#03314B',
    marginLeft: 16, // Ajouter un espace entre l'image et le texte
    flex: 1, // Le texte prend tout l'espace restant
    height: 63, // Hauteur de l'image
  },
  Image: {
    width: 46,
    height: 46,
    opacity: 1,
  },
});

export default RappelContainer;
