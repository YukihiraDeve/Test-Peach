// components/Title.js
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const MainTitle = ({ text }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{text}</Text>
        <View style={styles.underline} />
    </View>

  );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', // Centre le contenu horizontalement
        marginLeft: 16, // Ajoute une marge gauche de 16px pour l'ensemble du composant
      },
  title: {
    fontFamily: 'Cera Pro', 
    fontSize: 19.92,
    fontWeight: '700',
    lineHeight: 25.04,
    textAlign: 'center', 
  },
  underline: {
    width: '25%', // Ajustez la largeur du rectangle selon vos besoins
    height: 5, // Hauteur du rectangle
    backgroundColor: '#FEDE44', // Couleur du rectangle, ajustez selon vos besoins
    marginTop: 12, // Espace entre le texte et le rectangle
  },
});

export default MainTitle;
