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
  data;
  constructor(props) {
    super(props);

    this.state = {
      lastPress: new Date().getTime() - 300,
    };
  }
  upVote(d) {
    /*delta = new Date().getTime()  - this.state.lastPress;
    if(delta < 200)*/
    alert(data._id);
    upWaffle(data._id);

    /*this.setState({
      lastPress: new Date().getTime()
    });*/
  }
  render() {
    data = this.props.data;
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
            <Text>Kommentarer: {data.comment}</Text>
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
