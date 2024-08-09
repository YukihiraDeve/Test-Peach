import React from 'react';
import { View, StyleSheet, ScrollView, Button } from 'react-native';
import Title from '../components/Title';
import MainTitle from '../components/MainTitle';
import CarouselModel from '../components/Carousel';
import CustomContainer from '../components/CustomeContainer';
import LargeContainer from '../components/LargeContainer';
import LargeContainerInfo from '../components/LargeContainerInfo';
import InfoGraphPrises from '../components/InfoGraphPrise';
import TextCustom from '../components/TextCustom';
import TextEmoji from '../components/TextEmoji';
import UpgradeStep from '../components/UpgradeStep';
import RappelContainer from '../components/RappelContainer';
import ButtonContainer from '../components/ButtonContainer';

const hexagonRed = require('../assets/HexagonRed.png');
const hexagonGreen = require('../assets/HexagonGreen.png');
const hexagonYellow = require('../assets/HexagonYellow.png');

const EclairDeco = require('../assets/img/Eclair.png');
const CalendrierDeco = require('../assets/img/Calendrier.png');
const Trophy = require('../assets/img/Trophy.png');




const HomePage: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <MainTitle text="Semaine 1 : Synthèse" />
      <Title text="Vos succès" />
      <CarouselModel />
      <Title text="Vue d'ensemble" />
      <View style={styles.containerRow}>
        <CustomContainer text="🙂 Votre observance" hexagonImage={hexagonGreen} hexagonText="10%" style={styles.customContainer} />
        <CustomContainer text="💊 Votre record de prises consécutives"  hexagonImage={hexagonYellow} hexagonText="1O" style={styles.customContainer} />
      </View>
      <View style={styles.containerMarge}>
        <LargeContainer text="Nombre de prises manquées" hexagonImage={hexagonRed} ImageDeco={CalendrierDeco}  style={styles.customContainer} />
      </View>
      <View style={styles.containerMarge}>
        <LargeContainerInfo Title="1 symptôme ressenti"  Desc="Sensation de coeur qui bat
Sévérité : 10/10" ImageDeco={EclairDeco}  style={styles.customContainer} />
      </View>
      <Title text="Vos prises cette semaine" />
      <View style={styles.customContainer}>
        <InfoGraphPrises />
        <TextCustom text="Comme pour beaucoup de personnes, le week-end semble être un moment de la semaine plus compliqué pour prendre vos traitements. Voici quelques conseils :" />
        <TextEmoji text="N’hésitez pas à modifier vos rappels pour coller à vos habitudes du week-end. Par exemple pour un réveil plus tardif." />
        <TextEmoji text="Pensez à avoir votre Respiventix près de vous aux abords de votre horaire de prise. Placez-le dans la pièce où vous 
avez l’habitude d’être aux horaires de prises." />
      </View>
      <View style={styles.continerMargeTop}>
        <Title text="Vos prochaine étapes" />
        <View style={styles.customContainer}>
          <UpgradeStep Title="Pour s'améliorer" Desc="Vous avez fait de gros progrès cette semaine, continuez comme ça !" ImageDeco={Trophy} />
        </View>
        <View style={styles.containerMarge}>
          </View>
      </View>
      <View style={styles.customContainer}>
        <RappelContainer text="Peach vous rappellera demain de procéder à l’entretien de votre Respiventix"/>
      </View>
      <View style={styles.containerMarge}>
      </View>
      <View style={styles.customContainer}>
        <ButtonContainer text="Passer au jour suivant"/>
      </View>
      <View style={styles.EndPage}>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 100,
    justifyContent: 'flex-start', 
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    marginBottom: 20, 
  },
  customContainer: {
    marginRight: 6,
    marginLeft: 13, 
  },
  containerMarge: {
    marginBottom: 20, 
  },
  continerMargeTop:{
    marginTop: 20,
  },
  EndPage:{
    marginBottom: 40,
  }
});

export default HomePage;
