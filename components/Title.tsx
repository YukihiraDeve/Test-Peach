// components/Title.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';


interface TitleProps {
  text: string;
}


const Title: React.FC<TitleProps> = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Cera Pro', 
    fontSize: 22.08,
    fontWeight: '700',
    lineHeight: 27.75,
    textAlign: 'left',
    marginLeft: 16,
    marginBottom:20,
  },
});

export default Title;
