'use strict';

var React = require('react-native');
var { StyleSheet} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff'
  },
  header: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#a0a0a0'
  },
  thumbnail: {
    width: 75,
    height: 75,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 10
  },
  article_title: {
    textAlign: 'left',
    color: '#000000',
    fontSize: 15,
    marginTop: 15,
    marginRight: 15,
  },
  author_name: {
    textAlign: 'left',
    fontSize: 12,
    color: '#777777',
    marginBottom: 10
  },
  listview_border: {
    borderWidth: 1,
    borderColor: '#a0a0a0'
  },
  container_detail: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    borderWidth: 1,
    borderColor: '#a0a0a0'
  },
  detailed_article_image: {
    height: 200,
    alignSelf: 'center'
  },
  detailed_article_title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10
  },
  detailed_article_author: {
    textAlign: 'center',
    fontSize: 12,
    color: '#777777',
    paddingBottom: 20
  },
  detailed_article_description: {
    textAlign: 'auto',
    color: 'black',
    fontSize: 15,
    padding: 15
  }
});
