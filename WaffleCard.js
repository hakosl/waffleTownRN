import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import { upWaffle } from './apiHandler.js';

var deviceWidth = Dimensions.get('window').width;

export default class WaffleCard extends Component {
  constructor(props) {
    super(props);
  }
  upVote = () => upWaffle(this.props.data._id);

  render() {
    let data = this.props.data;
    console.log(data.url, data._id);
    return (
      <View style={styles.waffleContainer}>
        <TouchableHighlight onPress={this.upVote}>
          <View>
            <Image
              source={{uri: data.url}}
              style={styles.image}
              resizeMode='cover'
              />
            <Text style={styles.upwaffles}>Upwaffles: {this.props.data.upwaffels}</Text>
            <Text>konsistens: {data.consistency}</Text>
            <Text>Rating: {data.rating}</Text>
            <Text>Beskrivelse: {data.comment}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: deviceWidth,
    height: deviceWidth
  },
  waffleContainer: {
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 10,
    justifyContent: 'flex-start'
  },
  upwaffels: {
    textAlign: 'left'
  }
});
