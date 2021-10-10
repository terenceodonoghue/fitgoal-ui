import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface DividerProps {
  text: string;
}

const Divider: FunctionComponent<DividerProps> = ({ text }) => (
  <View style={styles.divider}>
    <View style={styles.line} />
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
    <View style={styles.line} />
  </View>
);

const styles = StyleSheet.create({
  divider: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 32,
  },
  line: {
    backgroundColor: '#F0F0F0',
    flex: 1,
    height: 2,
    marginHorizontal: 24,
  },
  text: {
    color: '#858891',
    fontFamily: 'Roboto-Light',
    fontSize: 15,
    letterSpacing: 0.3,
  },
});

export default Divider;
