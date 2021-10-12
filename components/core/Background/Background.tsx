import React, { FunctionComponent } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export const OriginationBackground: FunctionComponent = ({ children }) => (
  <ImageBackground
    source={require('../../../assets/images/Background.png')}
    style={styles.imageBackground}>
    {children}
  </ImageBackground>
);

const styles = StyleSheet.create({
  imageBackground: {
    height: '100%',
    width: '100%',
  },
});
