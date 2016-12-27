/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Text,
  ListView,
  TouchableHighlight,
  Navigator,
  StatusBar,
  View
} from 'react-native';

import { styles } from './CustomStyles';

var style = require('./CustomStyles');
const failedFetch = 'Fetch request failed!';

export default class Master extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      jsonURL: 'https://api.myjson.com/bins/1nrbo',
      dataSource: ds.cloneWithRows([]),
      defaultImage: 'http://bit.ly/2h3QEAt',
    };
  }

  componentDidMount() {
    this.loadData()
  }

  loadData() {
    fetch(this.state.jsonURL).then((response) => response.json()).then(
      (responseData) => { this.setState({
        dataSource:  this.state.dataSource.cloneWithRows(responseData)})
      }
    ).catch((error) => Alert.alert({error}, failedFetch)).done(() => {})
  }

  render() {
    return (
      <View style = { style.container }>
        <StatusBar
          hidden = { false }
          barStyle = { 'dark-content' }
          backgroundColor = { '#f0f8ff'}
        />
        <Text style = { style.header }>NEWS</Text>
        <ListView style = { style.listview_border }
          dataSource = { this.state.dataSource }
          renderRow = { this._renderRow.bind(this)}
          enableEmptySections = { true }
        />
      </View>
    );
  }

  /*
    TouchableHighlight iz nekog razloga ne dopušta korištenje eksternog stila
    za dodjeljivanje svojstava child elemenata.
  */
  _renderRow(rowData, sectionID, rowID) {
    return (
        <TouchableHighlight
          onPress = { () => this._onPress(rowData) }
          underlayColor = '#dddddd'>
          <View style = {{ flexDirection: 'row' }}>
            <Image
              style = { style.thumbnail }
              source = {{ uri: this.testImageURI(rowData) }}
            />
            <View style = {{ flexDirection: 'column', flex: 1 }}>
              <Text style = { style.article_title }>
                { rowData.headline }
              </Text>
              <Text style = { style.author_name }>
                {rowData.author.username}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
    )
  }

  testImageURI(rowData) {
    if(rowData.image == "") {
      return this.state.defaultImage
    } else {
      return rowData.image
    }
  }

  _onPress(rowData) {
    this.props.navigator.push({
      data: rowData,
      title: 'Detail'
    });
  }

}

AppRegistry.registerComponent('Test', () => Master);
