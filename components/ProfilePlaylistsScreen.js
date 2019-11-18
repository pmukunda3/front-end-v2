import React, {Component} from 'react';
import { FlatList, StyleSheet, View, ScrollView, Text, Image, Dimensions, InteractionManager } from 'react-native';
import { Icon, Avatar, ListItem } from 'react-native-elements'
import Playlists from './Data'

class Playlist extends Component {
  render () {
    let playlist = Playlists.find(element => element.key == this.props.playlistID);
    return (
      <ListItem
        onPress={() => this.onPress(this.props.playlistID)}
        title={playlist.title}
        subtitle={playlist.user}
        leftElement=
          {<Image 
            source={playlist.albumArt}
            style={{width: 50,height: 50}}
          />}
      />
    )
  }
  onPress(playlistID) {
    this.props.navigation.push('Playlist',
    {
      playlistID: playlistID
    })
  }
}

const DATA = [
  {
    key:0,
    playlistID:1
  },
  {
    key:1,
    playlistID:2
  },
  {
    key:2,
    playlistID:3
  },
]

const Artists = [
  {
    key: 0,
    title: 'Behemoth',
    logo: require('../assets/behemothlogo.jpg')
  },
  {
    key: 2,
    title: 'Nile',
    logo: require('../assets/nilelogo.jpg')
  },
  {
    key: 1,
    title: 'Linkin Park',
    logo: require('../assets/linkinparklogo.jpg')
  },
]

export default class ProfilePlaylistsScreen extends Component {
  render() {
    return (
      <ScrollView style={{marginLeft:20}}>
        <Text style={{fontSize:18, fontWeight:'bold', marginVertical:10}}>My Playlists</Text>
        <FlatList 
          style={{marginBottom:10}}
          data={DATA}
          renderItem={({ item }) => (
            <Playlist 
              playlistID={item.playlistID}
              navigation={this.props.navigation} 
            />
          )}
        />
        <Text style={{fontSize:18, fontWeight:'bold', marginBottom:10}}>Favorite Artists</Text>
        <FlatList 
          style={{marginBottom:10}}
          data={Artists}
          renderItem={({ item }) => (
            <ListItem 
              title={item.title}
              leftElement={
                <Image 
                  source={item.logo}
                  style={{width:50, height:50}}
                />
              }
            />
          )}
        />
      </ScrollView>
    )
  }
}