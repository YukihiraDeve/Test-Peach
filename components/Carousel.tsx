import React, { useRef } from 'react';
import { View, ScrollView, Dimensions, StyleSheet, Animated, Text, Image } from 'react-native';


const { width } = Dimensions.get('window');
const containerWidth = 344.43 + 32;

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
          <Image 
            source={require('../assets/img/Sally.png')} 
            style={styleCard1.image}
          />
          <View style={styles.TextZone}>
            <Text style={styles.Text}> Félicitations pour votre amélioration de 9 % dans votre observance thérapeutique ce mois-ci ! </Text>
          </View>
        </View>
        <View style={styleCard2.container}>
        <View style={styles.TextZone}>
            <Text style={styles.Text}> Vous faites partie du top 1 % des patients les plus observants !    Continuez comme ça. </Text>
          </View>
          <Image 
            source={require('../assets/img/Trophy.png')} 
            style={styleCard2.image}
          />
   
        </View>
        <View style={styleCard3.container}>
          <View style={styleCard3.circleTop} />
          <View style={styleCard3.circleBot} />
          <View style={styles.TextZone}>
            <Text style={styles.Text}> Votre engagement envers votre santé est exceptionnel et mérite d'être          salué. </Text>
          </View>
          <Image 
            source={require('../assets/img/Hearth.png')} 
            style={styleCard3.image}
          />
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
  Text: {
    fontFamily: 'Cera Pro',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20.11,
    color: '#000000',
    textAlign:'center'

  },

  TextZone: {
    width: 312,
    height: 80,
    position: 'absolute',
    top: 215,
    left: 16,
    paddingTop: 10,
    paddingLeft: 10,
    borderRadius: 8,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    opacity: 10, 
    gap: 10,
    backgroundColor: '#FFFFFF',
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
    overflow: 'hidden', 
  },

  image: {
    width: 153,
    height: 153,
    position: 'absolute',
    top: 24,
    left: 109.57,
    opacity: 1, 
    transform: [{ rotate: '-0deg' }],
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
    overflow: 'hidden',
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

image: {
  width: 153,
  height: 153,
  position: 'absolute',
  top: 24,
  left: 109.57,
  opacity: 1, 
  transform: [{ rotate: '-10deg' }],
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
    overflow: 'hidden',
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

image: {
  width: 153,
  height: 153,
  position: 'absolute',
  top: 24,
  left: 109.57,
  opacity: 1, 
  transform: [{ rotate: '10deg' }],
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
