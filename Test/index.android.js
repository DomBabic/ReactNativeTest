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
  View
} from 'react-native';

import { styles } from './CustomStyles';
import Master from './MasterTest';
import Detail from './DetailTest';

var style = require('./CustomStyles');

export class NewsFeed extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigator
        configureScene={ this.configureScene }
        initialRoute = {{ title: 'Master', index: 0}}
        renderScene = { this.navigatorRenderScene }
        navigationBar={ <Navigator.NavigationBar
          routeMapper={{
            LeftButton(route, navigator, index, navState) {
              if(index > 0) {
                return (
                  <TouchableHighlight
                    underlayColor = '#dddddd'
                    onPress={ () => {
                      if (index > 0) { navigator.pop() } }}>
                    <Image
                      source = { require('./returnarrow.png')}
                      style = {{ width: 40, height: 40, margin: 10 }}
                      resizeMode = 'contain' />
                  </TouchableHighlight>)
              }
              else { return null }
            },
            RightButton(route, navigator, index, navState) { return null },
            Title(route, navigator, index, navState) { return null }
          }}  />
        }
      />
    );
  }

  configureScene(route, navigator) {
    return Navigator.SceneConfigs.FadeAndroid;
  }

  navigatorRenderScene(route, navigator) {
    switch (route.title) {
      case 'Master':
        return <Master navigator = { navigator } title = 'Master'/>;
      case 'Detail':
        return <Detail navigator = { navigator } title = 'Detail'
          data = {route.data} />;
    }
  }

}

AppRegistry.registerComponent('Test', () => NewsFeed);
