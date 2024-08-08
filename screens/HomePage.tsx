// screens/HomePage.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Title from '../components/Title';
import MainTitle from '../components/MainTitle';
//import CarouselComponent from '../components/Carousel';

const HomePage: React.FC = () => {
  const handlePress = () => {
    alert('Button pressed!');
  };

  return (
    <View style={styles.container}>
      <MainTitle text="Semaine 1 : Synthèse" />
      <Title text="Vos succès" />
      {/* <CarouselComponent /> */}
      <Title text="Vus d'ensemble" />
      <Title text="Vos prises cette semaine" />
      <Title text="Vos prochaine étapes" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
});

export default HomePage;
