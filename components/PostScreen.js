import React, { Component } from 'react';
import { View, FlatList, ScrollView, TouchableHighlight } from 'react-native';
import { Text,  Input, Image, ListItem, Button, Icon, Avatar } from 'react-native-elements';
import EmptyScreen from './EmptyScreen';

export default class PostScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTintColor: '#ffffff',
      title:  'Post',
      headerStyle: {
        backgroundColor: '#316D88',
      }
    };
  };
  render() {
    return (
      <ScrollView>
        <View style={{flexDirection: 'row', padding: 10}}>
          <View style={{ width: 50 }}>
            <Avatar
              rounded
              source={this.props.navigation.getParam('avatar')}
              size="medium"
              onPress={() => this.onUserPress()}
            />
          </View>
          <View style={{ flex: 1, paddingLeft: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Button
                title={this.props.navigation.getParam('user')}
                titleStyle={{color:'black'}}
                type='clear'
                buttonStyle={{padding:0}}
                onPress={() => this.onUserPress()}
              />
              <View style={{flex:1}}></View>
              <Text style={{color: 'gray',textAlign: 'right'}}>
                {this.props.navigation.getParam('timestamp')}
              </Text>
            </View>
            <Text>{this.props.navigation.getParam('text')}</Text>
            <TouchableHighlight
              onPress={() => this.onPlaylistPress()}
              underlayColor="#eee">
              <View style={{flexDirection:'row', marginTop: 10}}> 
                <Image 
                  style={{width: 100, height: 100}} 
                  source={this.props.navigation.getParam('playlist').albumArt} 
                />
                <View style={{marginLeft:10}}>
                  <Text style={{fontWeight:'bold'}}>{this.props.navigation.getParam('playlist').title}</Text>
                  <Text style={{color:'gray'}}>{this.props.navigation.getParam('playlist').creator}</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  }
  onPlaylistPress() {
    let playlist=this.props.navigation.getParam('playlist');
    this.props.navigation.push('Playlist',
    {
      title: playlist.title,
      creator: playlist.creator
    })
  }
  onUserPress() {
    this.props.navigation.push('Profile',
    {
      user: this.props.navigation.getParam('user'),
      avatar: this.props.navigation.getParam('avatar')
    })
  }
}

const DATA = [
  {
      key:0,
      userName: 'Your friend',
      userDisplayPic: require('../assets/empty_profile_pic.png'),
      text: 'Superb!',
      timestamp: '2 minutes ago',
  },
]