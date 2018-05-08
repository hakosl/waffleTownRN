import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';
import WaffleCard from "./WaffleCard.js";
import Footer from './Footer.js';
import NewWaffle from './newWaffle.js';
import CameraScreen from './cameraScreen.js';

import {getWaffles} from './apiHandler.js';
import {getAllScenes, getCurScene, sceneShouldChange, setScene} from './sceneHandler.js';



export default class Waffle extends Component {
  constructor(props) {
    super(props);
    let idEquals = (r1, r2) => r1.id !== r2.id
    let dataSource = new ListView.DataSource({rowHasChanged: idEquals});
    this.state = {
      dataSource: dataSource.cloneWithRows([]),
      curScene: 'loading',
      imageTaken: false,
      image: "",
      updateView: 1
    }

    this.setImage = this.setImage.bind(this);
    this.changeScene = this.changeScene.bind(this)
    getWaffles(this, dataSource);
  }

  setImage(img) {
    setScene('newWaffle');
    this.setState({
      image: img
    })
  }

  changeScene(e, scene) {
    if(e !== null)
      e.preventDefault()
    setScene(scene);
    this.setState({
      updateView: Math.random(),
    });
  }

  renderRow(data) {
    return (
      <WaffleCard
        data={data}
      />
    );
  }
  renderHeader(d) {
    return (
      <Text style={styles.header}>
        Waffle Townwtf
      </Text>
    );
  }
  render() {
    let scenes = getAllScenes();
    let curScene = getCurScene();
    if(getCurScene() === scenes.waffles) {
      return (
        <View style={styles.container}>
        <ListView
          renderHeader={this.renderHeader}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
        <Footer handler={this.changeScene}/>
        </View>
      );
  } else if (curScene === scenes.newWaffle) {
    return <NewWaffle image={this.state.image}handler={this.changeScene}/>;
  } else if (curScene === scenes.takePicture) {
    return <CameraScreen setImage={this.setImage}handler={this.changeScene}/>;
  } else if(curScene = scenes.loading){
    return (<Text>LOADING</Text>);
  } else {
    return (
      <View style={styles.container}>
      <ListView
        renderHeader={this.renderHeader}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
      <Footer handler={this.changeScene}/>
      </View>
    );
  }
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 50,
    textAlign: 'center'
  },
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})
