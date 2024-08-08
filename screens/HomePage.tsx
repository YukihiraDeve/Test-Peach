import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Title from '../components/Title';
import MainTitle from '../components/MainTitle';
import CarouselModel from '../components/Carousel';
import CustomContainer from '../components/CustomeContainer';

const hexagonRed = require('../assets/HexagonRed.png');
const hexagonGreen = require('../assets/HexagonGreen.png');
const hexagonYellow = require('../assets/HexagonYellow.png');


const HomePage: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <MainTitle text="Semaine 1 : Synthèse" />
      <Title text="Vos succès" />
      <CarouselModel />
      <Title text="Vue d'ensemble" />
      <View style={styles.containerRow}>
        <CustomContainer text="🙂 Votre observance" hexagonImage={hexagonGreen} style={styles.customContainer} />
        <CustomContainer text="💊 Votre record de prises consécutives"  hexagonImage={hexagonYellow}  style={styles.customContainer} />
      </View>
      <Title text="Vos prises cette semaine" />
      <Title text="Vos prochaine étapes" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 100,
    justifyContent: 'flex-start', // Aligne les éléments au début du scroll
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Aligne les conteneurs au début
    marginBottom: 20, // Espace en bas du row container
  },
  customContainer: {
    marginRight: 6, // Ajoute un espace entre les conteneurs
    marginLeft: 13, // Ajoute un espace entre les conteneurs
  },
});

export default HomePage;
