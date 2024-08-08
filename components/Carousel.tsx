import React, { useRef } from 'react';
import { View, ScrollView, Dimensions, StyleSheet, Animated } from 'react-native';


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
        <View style={styleCard1.container}>
          <View style={styleCard1.circleTop} />
          <View style={styleCard1.circleBot} />
        </View>
        <View style={styleCard2.container}>
   
        </View>
        <View style={styleCard3.container}>
          <View style={styleCard3.circleTop} />
          <View style={styleCard3.circleBot} />
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

});

const styleCard1 = StyleSheet.create({
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
});

const styleCard2 = StyleSheet.create({

  container: {
    width: 344,
    height: 311,
    marginHorizontal: 16,
    borderRadius: 9,
    opacity: 1,
    backgroundColor: '#FDF3DC', 
    overflow: 'hidden',// Changed here
  },

circleTop: {
  width: 140,
  height: 140,
  borderRadius: 100,
  backgroundColor: '#BEF5D8',
  position: 'absolute',
  top: -30,
  left: -30,

},
circleBot: {
  width: 155,
  height: 155,
  borderRadius: 100,
  backgroundColor: '#BEF5D8',
  position: 'absolute',
  top: 185,
  left: 222,
},


});

const styleCard3 = StyleSheet.create({

  container: {
    width: 344,
    height: 311,
    marginHorizontal: 16,
    borderRadius: 9,
    opacity: 1,
    backgroundColor: '#E2FAEC', 
    overflow: 'hidden',// Changed here
  },

circleTop: {
  width: 140,
  height: 140,
  borderRadius: 100,
  backgroundColor: '#BEF5D8',
  position: 'absolute',
  top: -30,
  left: -30,

},
circleBot: {
  width: 155,
  height: 155,
  borderRadius: 100,
  backgroundColor: '#BEF5D8',
  position: 'absolute',
  top: 185,
  left: 222,
},


});

export default Carousel;
