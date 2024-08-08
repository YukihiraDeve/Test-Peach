import React from 'react';
import { View, Text, StyleSheet, Image, ViewStyle } from 'react-native';

interface CustomContainerProps {
  text: string;
  hexagonImage: any;
  style?: ViewStyle;
}

const CustomContainer: React.FC<CustomContainerProps> = ({ text, hexagonImage, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={hexagonImage} style={styles.hexagonImage} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 173,
    height: 169.02,
    borderRadius: 9.14,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    opacity: 1,
    backgroundColor: '#F1F6F4',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    position: 'relative',
  },
  hexagonImage: {
    width: 88,
    height: 88,
    position: 'absolute',
    top: 14.59,
    left: 43,
  },
  textContainer: {
    width: 105.07,
    height: 40,
    position: 'absolute',
    top: 113.29,
    left: 30.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Cera Pro', 
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
    textAlign: 'center', 
  },
});

export default CustomContainer;
