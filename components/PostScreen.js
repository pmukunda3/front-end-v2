import React, { Component } from 'react';
import { View, FlatList, ScrollView, TouchableHighlight } from 'react-native';
import { Text,  Input, Image, ListItem, Button, Icon, Avatar } from 'react-native-elements';
import EmptyScreen from './EmptyScreen';
import Playlists from './Data';

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
    let playlist = Playlists.find(element => element.key == this.props.navigation.getParam('playlistID'))
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
                  source={playlist.albumArt} 
                />
                <View style={{marginLeft:10}}>
                  <Text style={{fontWeight:'bold'}}>{playlist.title}</Text>
                  <Text style={{color:'gray'}}>{playlist.user}</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Comment
              userDisplayPic={item.userDisplayPic}
              userName={item.userName}
              text={item.text}
              timestamp={item.timestamp}
            />
          )}
        />
        <View style={{flexDirection:'row'}}>
          <Input
            style={{marginTop:10}}
            multiline={true}
            placeholder='Type a comment'
          />
          <Button
            icon={{name: 'plus', type: 'material-community'}}
          />
        </View>
      </ScrollView>
    );
  }
  onPlaylistPress() {
    this.props.navigation.push('Playlist',
    {
      playlistID: this.props.navigation.getParam('playlistID')
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

class Comment extends Component {
  render() {
      return (
          <ListItem
              leftElement = {
                  <Avatar rounded 
                      source = {this.props.userDisplayPic}
                      size = 'medium'
                  />
              }
              title={this.props.userName}
              titleStyle={{fontWeight: 'bold'}}
              subtitle={this.props.text}
              subtitleStyle={{color:'black'}}
              rightTitle={this.props.timestamp}
          />
      )
  }
}

const DATA = [
  {
      key:0,
      userName: 'Some Dude',
      userDisplayPic: require('../assets/empty_profile_pic.png'),
      text: 'Awesome!',
      timestamp: '2 minutes ago',
  },
  {
      key:1,
      userName: 'Some other Dude',
      userDisplayPic: require('../assets/empty_profile_pic.png'),
      text: 'Cool !!',
      timestamp: '1 hour ago',
  },
];