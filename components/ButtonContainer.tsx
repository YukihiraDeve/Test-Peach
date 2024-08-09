import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

interface Button {
  text: string;
}

const ButtonContainer: React.FC<Button> = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 358,
    height: 57,
    borderRadius: 100,
    opacity: 1,
    backgroundColor: '#2CE080',
    flexDirection: 'row', // Dispose les enfants en ligne (horizontalement)
    alignItems: 'center', // Centre verticalement le contenu
    justifyContent: 'center', // Centre horizontalement le contenu
  },
  text: {
    fontFamily: 'Cera Pro', 
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 20,
    color: '#03314B',
    textAlign: 'center',
  },
});

export default ButtonContainer;
