// components/Title.js
import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';


interface TitleProps {
  text: string;
}


const TextEmoji: React.FC<TitleProps> = ({ text}) => {
  return (
        <View style={styles.TextContainer}>
            <Text style={styles.Emoji}>✴️</Text>
            <Text style={styles.Text}>{text}</Text>
        </View>
)};

const styles = StyleSheet.create({
  Text: {
    fontFamily: 'Cera Pro', 
    fontSize: 16.08,
    fontWeight: '500',
    lineHeight: 20.75,
    textAlign: 'left',
    marginTop: 20,
    color: '#8BA0AC',
    paddingLeft:30,
  },
  TextContainer: {
    width: 355,
    height: 90
  },
  Emoji:{
    position: 'absolute',
    paddingTop: 22,
  }
});


export default TextEmoji;