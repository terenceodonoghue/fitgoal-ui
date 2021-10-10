import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

interface TitleProps {
  text: string;
}

const Title: FunctionComponent<TitleProps> = ({ text }) => (
  <Text style={styles.text}>{text}</Text>
);

const styles = StyleSheet.create({
  text: {
    color: '#5B5E66',
    fontFamily: 'Oswald-Medium',
    fontSize: 34,
    letterSpacing: -0.1224,
    margin: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default Title;
