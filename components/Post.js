import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Post extends Component {
  render() {
    return (
      <View style={styles.post}>
        <View style={styles.leftColumn}>
          <Image source={this.props.profilePic} style={styles.profilePic} />
        </View>
        <View style={styles.rightColumn}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.profileName}>{this.props.profileName}</Text>
            </View>
            <View>
              <Text style={styles.timestamp}>{this.props.timestamp}</Text>
            </View>
          </View>
          <Text style={styles.postText}>{this.props.postText}</Text>
          <Text style={styles.link} onPress={() => Linking.openURL(String(this.props.postLink))}> 
              {this.props.postLink}
          </Text>
          <View style={{paddingTop:10}}>
            <Image style={styles.albumArt} source={this.props.albumArt} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  post: {
    flexDirection: 'row',
    padding: 10,
    fontSize: 18,
  },
  leftColumn: {
    width: 60,
  },
  profilePic: {
    width: 57,
    height: 57,
    borderRadius: 57 / 2,
  },
  rightColumn: {
    flex: 1,
    paddingLeft: 10,
  },
  profileName: {
    fontWeight: 'bold',
  },
  timestamp: {
    color: '#aaa',
    textAlign: 'right',
  },
  postText: {},
  link: {
    color: 'purple',
    fontSize:16,
    flex:1,
    flexWrap: 'wrap',
    // marginHorizontal: 20,
    // marginBottom: 10,
  },
  albumArt: {
    width: 180,
    height: 180,
  }
});
