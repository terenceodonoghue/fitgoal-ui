import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export const Facebook: FunctionComponent = props => (
  <View style={[styles.button, styles.facebook]}>
    <Svg width={11} height={20} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.458.869v2.94H8.71c-1.369 0-1.625.657-1.625 1.603v2.105h3.261l-.434 3.296H7.085v8.452H3.679v-8.452H.84V7.517h2.838V5.089c0-2.817 1.725-4.354 4.24-4.354 1.203 0 2.238.09 2.539.134z"
        fill="#fff"
      />
    </Svg>
  </View>
);

export const Google: FunctionComponent = props => (
  <View style={[styles.button, styles.google]}>
    <Svg width={20} height={20} fill="none" {...props}>
      <Path
        d="M4.873 11.933l-.645 2.408-2.356.05A9.226 9.226 0 01.768 10c0-1.536.374-2.985 1.036-4.26l2.098.384.919 2.086A5.51 5.51 0 004.524 10c0 .68.123 1.332.349 1.933z"
        fill="#FBBB00"
      />
      <Path
        d="M19.128 8.27a9.283 9.283 0 01-.04 3.665 9.263 9.263 0 01-3.261 5.29l-2.643-.135-.374-2.336a5.521 5.521 0 002.375-2.82h-4.952V8.27h8.895z"
        fill="#518EF8"
      />
      <Path
        d="M15.826 17.224a9.22 9.22 0 01-5.797 2.04 9.259 9.259 0 01-8.157-4.873l3.001-2.458a5.506 5.506 0 007.937 2.821l3.016 2.47z"
        fill="#28B446"
      />
      <Path
        d="M15.94 2.868l-3 2.457A5.508 5.508 0 004.821 8.21L1.804 5.74A9.259 9.259 0 0110.029.734c2.247 0 4.307.801 5.911 2.133z"
        fill="#F14336"
      />
    </Svg>
  </View>
);

export const Twitter: FunctionComponent = props => (
  <View style={[styles.button, styles.twitter]}>
    <Svg width={22} height={18} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.025 2.72a8.933 8.933 0 01-2.084 2.15c.013.18.013.36.013.54 0 5.494-4.18 11.825-11.82 11.825-2.354 0-4.541-.682-6.38-1.866.334.039.656.052 1.003.052 1.942 0 3.73-.656 5.158-1.776a4.162 4.162 0 01-3.885-2.882c.258.038.515.064.785.064a4.39 4.39 0 001.093-.141 4.156 4.156 0 01-3.331-4.08v-.05a4.183 4.183 0 001.878.527A4.154 4.154 0 011.603 3.62c0-.772.205-1.48.565-2.097a11.807 11.807 0 008.567 4.35 4.694 4.694 0 01-.103-.953A4.154 4.154 0 0114.786.765c1.197 0 2.277.501 3.036 1.312a8.177 8.177 0 002.637-1.004 4.145 4.145 0 01-1.827 2.29 8.326 8.326 0 002.393-.642z"
        fill="#fff"
      />
    </Svg>
  </View>
);

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 70 / 2,
    height: 70,
    width: 70,
  },
  facebook: {
    backgroundColor: '#3B5998',
  },
  google: {
    backgroundColor: '#fff',
  },
  twitter: {
    backgroundColor: '#00ACED',
  },
});
