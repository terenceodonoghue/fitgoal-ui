import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';
import { OriginationBackground } from '../components/core/Background/Background';
import Button from '../components/core/Button/Button';
import Divider from '../components/core/Divider/Divider';
import { Facebook, Google, Twitter } from '../components/core/Social/Social';
import Title from '../components/core/Title/Title';
import { RootStackParamList } from '../types';

type SignupScreenProps = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const SignupScreen: FunctionComponent<SignupScreenProps> = ({ navigation }) => (
  <OriginationBackground>
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.hero}>
        <Svg width={104} height={104} fill="none">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M52 0c13.89 0 26.948 5.409 36.77 15.23C98.59 25.052 104 38.11 104 52c0 13.89-5.409 26.948-15.23 36.77C78.947 98.59 65.89 104 52 104c-13.89 0-26.948-5.409-36.77-15.23C5.41 78.947 0 65.89 0 52c0-13.89 5.409-26.948 15.23-36.77C25.052 5.41 38.11 0 52 0z"
            fill="#fff"
          />
          <Circle cx={52} cy={52} r={45} fill="#7630DC" />
          <Path
            d="M76.843 35.315a3.047 3.047 0 00-4.309 0L45.63 62.221 31.466 48.058a3.047 3.047 0 00-4.31 4.309l16.318 16.317a3.037 3.037 0 002.155.893c.78 0 1.56-.298 2.154-.893l29.06-29.06a3.047 3.047 0 000-4.309z"
            fill="#fff"
            stroke="#fff"
            strokeWidth={3.15}
          />
        </Svg>
      </View>
      <View>
        <Title text="Hello!" />
        <Text style={[styles.subtitle, styles.text]}>
          Start transforming the way you enjoy your life
        </Text>
        <Button
          onPress={() => navigation.navigate('CreateAccount')}
          text="Create account"
        />
        <Divider text="Or" />
        <View style={styles.socialButtons}>
          <Facebook />
          <Google />
          <Twitter />
        </View>
      </View>
      <Text style={styles.text}>
        Already onboard? <Text style={styles.login}>Login</Text>
      </Text>
    </SafeAreaView>
  </OriginationBackground>
);

const styles = StyleSheet.create({
  hero: {
    alignSelf: 'center',
    borderRadius: 104 / 2,
    height: 104,
    width: 104,
    backgroundColor: '#fff',
  },
  login: {
    color: '#3EC7E6',
  },
  safeAreaView: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  socialButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  subtitle: { marginBottom: 64 },
  text: {
    alignSelf: 'center',
    maxWidth: '60%',
    color: '#858891',
    fontSize: 15,
    letterSpacing: 0.3,
    textAlign: 'center',
  },
});

export default SignupScreen;
