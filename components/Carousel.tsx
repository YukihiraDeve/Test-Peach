import React, { useRef } from 'react';
import { View, ScrollView, Dimensions, StyleSheet, Animated } from 'react-native';
import Bubble from './ItemCarousel/Item';
import Item from './ItemCarousel/Item';
import Hearth from './ItemCarousel/Item';

const { width } = Dimensions.get('window');
const containerWidth = 344.43 + 32; // 344.43 + 16 * 2 (for marginHorizontal)

const Carousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.carouselContainer}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.container}>
          <Bubble text="Hello"/>
          <View style={styles.circleTop} />
          <View style={styles.circleBot } />
        </View>
        <View style={styles.containerWrapper}>
          <Item backgroundColor="green" />
        </View>
        <View style={styles.containerWrapper}>
          <Hearth backgroundColor="blue" />
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  scrollViewContent: {
    paddingHorizontal: (width - containerWidth),
  },
  container: {
    width: 344,
    height: 311,
    marginHorizontal: 16,
    borderRadius: 9,
    opacity: 1,
    backgroundColor: '#F0EEFE', 
    overflow: 'hidden',// Changed here
  },
  circleTop: {
    width: 140,
    height: 140,
    borderRadius: 100,
    backgroundColor: '#D8CDFE',
    position: 'absolute',
    top: -30,
    left: -30,

  },
  circleBot: {
    width: 155,
    height: 155,
    borderRadius: 100,
    backgroundColor: '#D8CDFE',
    position: 'absolute',
    top: 185,
    left: 222,
  },
  containerWrapper: {
    width: containerWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Carousel;
