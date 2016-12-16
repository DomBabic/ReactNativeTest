import React, { Component} from 'react';
import {
  AppRegistry,
  Dimensions,
  Image,
  Text,
  View
} from 'react-native';

import { styles } from './CustomStyles';

var style = require('./CustomStyles');
const windowWidth = Dimensions.get('window').width;

export default class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      defaultImage: 'http://bit.ly/2h3QEAt'
    }
  }

  testImageURI(uri) {
    if(uri === "") {
      return this.state.defaultImage;
    } else {
      return uri;
    }
  }

  testDescription(description) {
    if(description === "") {
      return 'Description not found!';
    } else {
      return description;
    }
  }

  /*
    JSON objekti za atribut description uvijek sadrže prazan string zbog
    čega je korišten metaDescription atribut.
  */
  render() {
    return (
      <View style = { style.container_detail }>
        <Image
          source = {{ uri: this.testImageURI(this.props.data.image) }}
          style = {[ style.detailed_article_image, { width: windowWidth}]}
          resizeMode = 'contain' />
        <Text style = { style.detailed_article_title }>
          {this.props.data.headline}
        </Text>
        <Text style = { style.detailed_article_author}>
          {this.props.data.author.username}
        </Text>
        <Text style = { style.detailed_article_description }>
          { this.testDescription(this.props.data.metaDescription)}
        </Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('Test', () => Detail);
