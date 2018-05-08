import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Picker,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
  Button
} from 'react-native';
import {postWaffle} from './apiHandler.js';
import {setScene} from './sceneHandler.js';

var deviceWidth = Dimensions.get('window').width;

export default class NewWaffle extends Component {
  constructor(props) {
    super(props);
    this.lagNyWaffle = () => {
      let state = this.state;
      postWaffle(state.postImg, state.kommentar, state.konsistens, state.rating, null, this.updateScene.bind(this));
    }
    let img = require('./img/waffle1.jpeg');
    this.state = {
      img: img,
      postImg: props.image,
      konsistens: 1,
      rating: 1,
      kommentar: "ikkje bra",
      update: 0
    }
  }

  updateScene(x, scene) {
    this.props.handler(x, scene);
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.newWaffleContainer}>
        <Text>NEW WAFFLE!!!!</Text>
        <TouchableHighlight
          onPress={e => this.props.handler(e, 'takePicture')}
          >
          <Image
            source={this.state.img}
            style={styles.img}
            />
        </TouchableHighlight>
        <Text>konsistens:</Text>
        <Picker>
          <Picker.Item
            label='1'
            value='1'
          />
          <Picker.Item
            label='2'
            value='2'
          />
          <Picker.Item
            label='3'
            value='3'
          />
        </Picker>
        <Text>
          Rating:
        </Text>
        <Picker>
          <Picker.Item
            label='1'
            value={1}
          />
          <Picker.Item
            label='2'
            value={2}
          />
          <Picker.Item
            label='3'
            value={3}
          />
          <Picker.Item
            label='4'
            value={4}
          />
          <Picker.Item
            label='5'
            value={5}
          />
        </Picker>
        <View style={styles.kommentar}>
          <Text>Kommentar:</Text>
          <TextInput
            style={styles.textInput}
            editable
            value={this.state.kommentar}
            onChangeText={kommentar => this.setState({kommentar})}
            placeholder='skriv din kommentar her'
          />
        </View>
        <Button
          title='Lag en ny vaffel'
          onPress={this.lagNyWaffle}
        />
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  img: {
    width: deviceWidth
  },
  newWaffleContainer: {
    marginTop: 20,
  },
  kommentar: {
    marginTop: 20,
    marginBottom: 20,
  },
  textInput: {
    marginTop: 20,
    height: 100,
  }
});
