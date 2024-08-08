// components/Carousel.js
import React from 'react';
import { View, Text, Dimensions, StyleSheet, Platform } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

const { width: viewportWidth } = Dimensions.get('window');

const entries = [
  { title: 'Slide 1', subtitle: 'Subtitle 1', illustration: 'https://via.placeholder.com/600x400' },
  { title: 'Slide 2', subtitle: 'Subtitle 2', illustration: 'https://via.placeholder.com/600x400' },
  { title: 'Slide 3', subtitle: 'Subtitle 3', illustration: 'https://via.placeholder.com/600x400' },
  // Ajoutez plus de slides si nécessaire
];

const renderItem = ({ item, index }, parallaxProps) => (
  <View style={styles.slide}>
    <ParallaxImage
      source={{ uri: item.illustration }}
      containerStyle={styles.imageContainer}
      style={styles.image}
      parallaxFactor={0.4}
      {...parallaxProps}
    />
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.subtitle}>{item.subtitle}</Text>
  </View>
);

const CarouselComponent = () => {
  return (
    <Carousel
      data={entries}
      renderItem={renderItem}
      sliderWidth={viewportWidth}
      itemWidth={viewportWidth * 0.8}
      layout={'default'}
      loop={true}
      hasParallaxImages={true}
    />
    
  );
};

const styles = StyleSheet.create({
  slide: {
    backgroundColor: '#FEDE44',
    borderRadius: 8,
    height: 250,
    padding: 20,
    marginLeft: 25,
    marginRight: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});

export default CarouselComponent;
