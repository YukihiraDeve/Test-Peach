import React from 'react';
import { View, Text, StyleSheet, Image, ViewStyle } from 'react-native';



const Arrow = require('../assets/arrow.png');
const HexagonGrey = require('../assets/HexagonGrey.png');
const HexagonBlueFully = require('../assets/HexagonBlueFull.png');

interface CustomContainerProps {
  Title: string;
  Desc: string;
  ImageDeco: any;
  style?: ViewStyle;
}

const UpgradeStep: React.FC<CustomContainerProps> = ({ Title, Desc, style, ImageDeco }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.TitleContainer}>
        <Text style={styles.Title}>{Title}</Text>
      </View>
      <Image source={ImageDeco} style={styles.Image} />
      <View style={styles.HexagonContainer}>
        <Image source={HexagonGrey} style={styles.Hexagon} />
        <Image source={Arrow} style={styles.Arrow} />
        <Image source={HexagonBlueFully} style={styles.HexagonFull} />
      </View>
      <View style={styles.LittleContainersRow}>
        <View style={[styles.LittleContainer, { marginRight: 12 }]}>
          <View style={stylesText.NumberContainer}>
            <View style={stylesText.NumberRow}>
              <Text style={stylesText.NumberLeft}>11/</Text>
              <Text style={stylesText.NumberRight}>14</Text>
            </View>
            <Text style={stylesText.Desc}>Prises validées cette semaine</Text>
          </View>
        </View>
        <View style={styles.LittleContainer}>
        <View style={[styles.LittleContainer, { marginRight: 12 }]}>
          <View style={stylesText.NumberContainer}>
            <View style={stylesText.NumberRow}>
              <Text style={stylesText.NumberLeft}>14/</Text>
              <Text style={stylesText.NumberRight}>14</Text>
            </View>
            <Text style={stylesText.Desc}>Objectif de prises validées à atteindre</Text>
          </View>
        </View>
        </View>
      </View>
    </View>
  );
};

const stylesText = StyleSheet.create({
    Title: {
        fontFamily: 'Cera Pro', 
        fontSize: 21,
        fontWeight: '700',
        lineHeight: 20.75,
        textAlign: 'left',
        color: '#8BA0AC',
        marginLeft: 10,
    },
    NumberContainer: {
        flexDirection: 'column', // Colonne pour que la description soit en dessous
        alignItems: 'flex-start',
        marginTop: 15,
        marginLeft: 10,
    },
    NumberRow: {
        flexDirection: 'row', // Ligne pour aligner "11/" et "14"
    },
    NumberLeft: {
        fontFamily: 'Cera Pro', 
        fontSize: 21,
        fontWeight: '700',
        lineHeight: 20.75,
        color: '#153247', // Couleur différente pour "11/"
    },
    NumberRight: {
        fontFamily: 'Cera Pro', 
        fontSize: 21,
        fontWeight: '700',
        lineHeight: 20.75,
        color: '#8BA0AC', // Couleur pour "14"
    },
    Desc: {
        fontFamily: 'Cera Pro', 
        fontSize: 12.08,
        fontWeight: '500',
        lineHeight: 16.75,
        color: '#8BA0AC',
        marginTop: 5,
        height: 40,
        
    },
});

const styles = StyleSheet.create({
  container: {
    width: 358,
    height: 311.54,
    borderRadius: 9.14,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    opacity: 1,
    backgroundColor: '#F1F6F4',
    overflow: 'hidden',
    paddingBottom: 10,
    alignItems: 'center',  
    paddingTop: 25,
  },
  LittleContainersRow: {
    flexDirection: 'row',  
    justifyContent: 'center',  
    marginTop: 20,  
  },
  LittleContainer: {
    width: 158,
    height: 89,
    borderRadius: 9.14,
    backgroundColor: '#FFFFFF',
  },
  TitleContainer: {
    justifyContent: 'center',  
    alignItems: 'center',  
  },  
  Title: {
    fontFamily: 'Cera Pro', 
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
    color: '#03314B',
    textAlign: 'center',  
  },
  Image: {
    width: 153.49,
    height: 153.49,
    position: 'absolute',
    top: -11.57,
    left: 253.88,
    transform: [{ rotate: '-10deg' }],
    opacity: 0.4,
  },
  Arrow: {
    width: 21,
    height: 21,
    marginHorizontal: 10, 
  },
  Hexagon: {
    width: 90.49,
    height: 90.49,
  },
  HexagonFull: {
    width: 111,
    height: 111,
  },
  HexagonContainer: { 
    flexDirection: 'row', 
    justifyContent: 'center',  
    alignItems: 'center',  
    marginTop: 20,  
  },
});

export default UpgradeStep;
