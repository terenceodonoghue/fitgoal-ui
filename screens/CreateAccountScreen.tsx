import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OriginationBackground } from '../components/core/Background/Background';
import Button from '../components/core/Button/Button';
import Title from '../components/core/Title/Title';
import { RootStackParamList } from '../types';

type CreateAccountScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CreateAccount'
>;

const CreateAccountScreen: FunctionComponent<CreateAccountScreenProps> = () => (
  <OriginationBackground>
    <SafeAreaView style={styles.safeAreaView}>
      <View>
        <Title text="Signup" />
      </View>
      <View>
        <TextInput
          placeholder="Name"
          placeholderTextColor="#858891"
          style={styles.textInput}
          textContentType="name"
        />
        <TextInput
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor="#858891"
          style={styles.textInput}
          textContentType="username"
        />
        <TextInput
          autoCapitalize="none"
          placeholder="Password"
          placeholderTextColor="#858891"
          secureTextEntry
          style={styles.textInput}
          textContentType="newPassword"
        />
        <TextInput
          autoCapitalize="none"
          placeholder="Confirm Password"
          placeholderTextColor="#858891"
          secureTextEntry
          style={styles.textInput}
        />
      </View>
      <Button text="Create account" />
      <Text>
        Already onboard? <Text>Login</Text>
      </Text>
    </SafeAreaView>
  </OriginationBackground>
);

const styles = StyleSheet.create({
  safeAreaView: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  textInput: {
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 1,
    marginHorizontal: 16,
    paddingVertical: 16,
    marginVertical: 8,
    fontFamily: 'Roboto-Light',
    fontSize: 15,
    letterSpacing: 0.3,
    // color: '#858891',
  },
});

export default CreateAccountScreen;
