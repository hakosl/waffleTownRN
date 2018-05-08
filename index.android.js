/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Waffle from './Waffle.js';


export default class waffletown extends Component {
  render() {
    return (
        <Waffle/>
    );
  }
}

AppRegistry.registerComponent('waffletown', () => waffletown);
