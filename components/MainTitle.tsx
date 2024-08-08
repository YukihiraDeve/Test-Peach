// components/Title.js
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface MainTitleProps {
  text: string;
}


const MainTitle: React.FC<MainTitleProps> = ({ text }) => {
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
    width: '25%', 
    height: 5, 
    backgroundColor: '#FEDE44',
    marginTop: 12,
    marginBottom: 20,
  },
});

export default MainTitle;
