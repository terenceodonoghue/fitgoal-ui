import React, { FunctionComponent } from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

interface ButtonProps extends PressableProps {
  text?: string;
}

const Button: FunctionComponent<ButtonProps> = ({ text, ...props }) => (
  <Pressable style={styles.pressable} {...props}>
    <Text style={styles.text}>{text}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: '#9013FE',
    borderRadius: 30,
    padding: 16,
  },
  text: {
    color: '#fff',
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
    textAlign: 'center',
  },
});

export default Button;
