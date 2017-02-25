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

const MOCK_DATA = [ { _id: "58b0b81137e5a80b115ff364",
    rating: 1,
    url: "https://activerain-store.s3.amazonaws.com/image_store/uploads/agents/rgreenberg/files/Waffles2.jpg",
    comment: 'Jævlig bra waffel',
    palegg: [ 'Syltetoy', 'Romme' ],
    consistency: 2,
    upwaffels: 110,
    date: "2017-02-24T22:47:45.183Z" },
  { _id: "58b0ba892b23350f50366987",
    url: "https://activerain-store.s3.amazonaws.com/image_store/uploads/agents/rgreenberg/files/Waffles2.jpg",
    rating: 1,
    comment: 'Jævlig bra waffel',
    palegg: [ 'Syltetoy', 'Romme' ],
    consistency: 2,
    upwaffels: 15,
    date: "2017-02-24T22:58:17.871Z"},
  { _id: "58b0ba9331584a0f612a2092",
    url: "https://activerain-store.s3.amazonaws.com/image_store/uploads/agents/rgreenberg/files/Waffles2.jpg",
    rating: 1,
    comment: 'Jævlig bra waffel',
    palegg: [ 'Syltetoy', 'Romme' ],
    consistency: 2,
    upwaffels: 23,
    date: "2017-02-24T22:58:27.270Z" } ];


export default class Waffle extends Component {
  constructor(props) {
    super(props);
    let idEquals = (r1, r2) => r1.id !== r2.id
    const dataSource = new ListView.DataSource({rowHasChanged: idEquals});
    this.state = {
      dataSource: dataSource.cloneWithRows(MOCK_DATA)
    }
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
        Waffle Town
      </Text>
    );
  }
  renderFooter(d) {
    return (
      <Footer data={d} />
    );
  }
  render() {
    return (
      <View style={styles.container}>
      <ListView
        renderHeader={this.renderHeader}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
      <Footer />
      </View>
    );
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
