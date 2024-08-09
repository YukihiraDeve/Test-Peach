import React from 'react';
import { View, Text, StyleSheet, Image, ViewStyle } from 'react-native';

interface CustomContainerProps {
  Title: string;
  Desc: string;
  ImageDeco: any;
  style?: ViewStyle;
}

const nose = require('../assets/img/nose.png');

const LargeContainerInfo: React.FC<CustomContainerProps> = ({ Title, Desc, style, ImageDeco }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.Cercle}>
        <View style={styles.ProgressBar}>
          <Image source={nose} style={{width: 30, height: 30, borderRadius: 100, left:20, top:20}} />
        </View>

      </View>
      <View style={styles.TitleContainer}>
        <Text style={styles.Title}>{Title}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.Title}>{Desc}</Text>
      </View>
    <Image source={ImageDeco} style={styles.Image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 358,
    height: 135.83,
    borderRadius: 9.14,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    opacity: 1,
    backgroundColor: '#F1F6F4',
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'relative',
    overflow: 'hidden',
    paddingBottom: 10,
  },
  Cercle:{
    width: 80,
    height: 80,
    borderRadius:100,
    backgroundColor: '#F05C6B',
    position: 'absolute',
    top: 24.59,
    left: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProgressBar:{
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
  }, 
  TitleContainer: {
    width: 237.07,
    height: 21,
    position: 'absolute',
    top: 25.29,
    left: 114.15,

  },
  textContainer: {
    width: 237,
    height: 52,
    position: 'absolute',
    top: 55.29,
    left: 114,
  },
  Title: {
    fontFamily: 'Cera Pro', 
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
    color: '#03314B'
},
Text: {
  fontFamily: 'Cera Pro', 
  fontSize: 16,
  fontWeight: '500',
  lineHeight: 20,
  color: '#03314B'
},

Image: {
    width: 83,
    height: 83,
    position: 'absolute',
    top: 71.59,
    left: 304,
    transform: [{ rotate: '10deg' }],
    opacity: 0.4
  },
});



export default LargeContainerInfo;
