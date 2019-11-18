import React, { Component } from 'react';
import { View, FlatList, ScrollView, TouchableHighlight } from 'react-native';
import { Text,  Input, Image, ListItem, Button, Icon, Avatar } from 'react-native-elements';
import EmptyScreen from './EmptyScreen';
import Playlists from './Data'
import { Linking } from 'expo'

export default class PlaylistScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#316D88',
      },
      title:  'Playlist',
    };
  };
  render() {
    let playlist=Playlists.find(element => element.key == this.props.navigation.getParam('playlistID'));
    return (
      <ScrollView>
        <View style={{ flexDirection: 'row', flex:1 }}>
          <Image
            source={playlist.albumArt}
            style={{ width: 150, height: 150 }}
            containerStyle={{ margin: 20 }}
          />
          <View style={{ flex: 1, margin: 20, marginLeft: 0 }}>
            <Text h4 style={{paddingLeft:10}}>{playlist.title}</Text>
            <TouchableHighlight onPress={() => this.onUserPress()}>
              <View style={{padding:10, flexDirection:'row', alignItems:'center'}}>
                <Avatar rounded
                  source={playlist.avatar}
                  size="small"
                />
                <Text style={{color: 'gray', paddingLeft:10, fontWeight:'bold'}}>
                  {playlist.user}
                </Text>
              </View>
            </TouchableHighlight>
            <View style={{marginTop:10}}>
              <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:5}}>
                <Button
                  type='outline'
                  icon={{name: 'account-plus', type: 'material-community'}}
                  title='Join'

                />
                <Button
                  type='outline'
                  icon={{name: 'plus', type: 'material-community'}}
                  title='Add Song'

                />
              </View>
              <Button
                type='outline'
                icon={{name: 'play', type: 'material-community'}}
                title='Play'
              />
            </View>
          </View>
        </View>
        <FlatList
          data={playlist.tracks}
          renderItem={({ item }) => (
              <Song
                title={item.title}
                artist={item.artist}
                length={item.length}
                albumArt={item.albumArt}
                spotifyID={item.spotifyID}
              />
          )}
        />
      </ScrollView>
    );
  }
  onUserPress() {
    let playlist=Playlists.find(element => element.key == this.props.navigation.getParam('playlistID'));
    this.props.navigation.push('Profile',
    {
      user: playlist.user,
      avatar: playlist.avatar
    })
  }
}

class Song extends Component {
  render() {
    return (
      <ListItem
          title={this.props.title}
          subtitle={this.props.artist}
          rightTitle={this.props.length}
          leftElement={
              <Image 
                  source = {this.props.albumArt}
                  style = {{width: 50, height: 50}}
              />
          }
          onPress={() => Linking.openURL(`https://open.spotify.com/track/${this.props.spotifyID}`)}
      />
    )
  }
}
