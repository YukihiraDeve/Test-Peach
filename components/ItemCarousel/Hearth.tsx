// CarouselItem.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Hearth = ({ backgroundColor }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* Vous pouvez ajouter d'autres contenus ici */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 344.43,
    height: 311.54,
    borderRadius: 9.14,
    marginHorizontal: 16, // Fixed margin between containers
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Hearth;
