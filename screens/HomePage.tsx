import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Title from '../components/Title';
import MainTitle from '../components/MainTitle';
import CarouselModel from '../components/Carousel';
import CustomContainer from '../components/CustomeContainer';
import LargeContainer from '../components/LargeContainer';
import LargeContainerInfo from '../components/LargeContainerInfo';
import InfoGraphPrises from '../components/InfoGraphPrise';

const hexagonRed = require('../assets/HexagonRed.png');
const hexagonGreen = require('../assets/HexagonGreen.png');
const hexagonYellow = require('../assets/HexagonYellow.png');

const EclairDeco = require('../assets/img/Eclair.png');
const CalendrierDeco = require('../assets/img/Calendrier.png');




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
      <View style={styles.containerMarge}>
        <LargeContainer text="Nombre de prises manquées"  hexagonImage={hexagonRed} ImageDeco={CalendrierDeco}  style={styles.customContainer} />
      </View>
      <View style={styles.containerMarge}>
        <LargeContainerInfo Title="1 symptôme ressenti"  Desc="Sensation de coeur qui bat
Sévérité : 10/10" ImageDeco={EclairDeco}  style={styles.customContainer} />
      </View>
      <Title text="Vos prises cette semaine" />
      <View style={styles.customContainer}>
        <InfoGraphPrises />
      </View>
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
  containerMarge: {
    marginBottom: 20, // Espace en bas du row container
  },
});

export default HomePage;
