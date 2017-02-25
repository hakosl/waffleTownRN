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
  newWaffle() {
    //open new waffle screen here
  }
  render() {
    return (
    <View style={styles.newWaffle}>
    <TouchableHighlight onPress={this.newWaffle}>
      <View >
        <Text style={styles.textStyle}>Post en ny Waffle</Text>
      </View>
    </TouchableHighlight>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  newWaffle: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20
  }
});
