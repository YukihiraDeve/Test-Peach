import React from 'react';
import { View, Text, StyleSheet, Image, ViewStyle } from 'react-native';

interface CustomContainerProps {
  text: string;
  hexagonImage: any;
  ImageDeco: any;
  style?: ViewStyle;
}

const LargeContainer: React.FC<CustomContainerProps> = ({ text, hexagonImage, style, ImageDeco }) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={hexagonImage} style={styles.hexagonImage} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
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
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    position: 'relative',
    overflow: 'hidden',

  },
  hexagonImage: {
    width: 88,
    height: 88,
    position: 'absolute',
    top: 24.59,
    left: 23,
  },
  textContainer: {
    width: 165.07,
    height: 42,
    position: 'absolute',
    top: 47.29,
    left: 123.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Cera Pro', 
    fontSize: 16,
    fontWeight: '700',
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

export default LargeContainer;
