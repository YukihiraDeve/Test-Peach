// Bubble.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface TextProps {
  text: string;
}

const Bubble: React.FC<TextProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text> {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 344.43,
    height: 311.54,
    borderRadius: 9.14,
    marginHorizontal: 16,
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0EEFE', // Changed here
  },
});

export default Bubble;
