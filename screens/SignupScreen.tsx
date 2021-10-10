import React from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/core/Button/Button';
import Title from '../components/core/title/Title';

const SignupScreen = () => (
  <ImageBackground
    source={require('../assets/images/Background.png')}
    style={styles.imageBackground}>
    <SafeAreaView style={styles.safeAreaView}>
      <Title text="Hello!" />
      <Text style={styles.text}>
        Start transforming the way you enjoy your life
      </Text>
      <Button text="Create account" />
    </SafeAreaView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    color: '#858891',
    fontSize: 15,
    letterSpacing: 0.3,
    marginBottom: 64,
    textAlign: 'center',
  },
});

export default SignupScreen;
