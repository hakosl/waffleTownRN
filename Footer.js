import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

export default class WaffleFooter extends Component {
  render() {
    return (
    <TouchableHighlight>
      <View style={styles.newWaffle}>
        <Text>Post en ny Waffle</Text>
      </View>
    </TouchableHighlight>
    );
  }
}


const styles = StyleSheet.create({
  newWaffle: {
    height: 50
  }
});
