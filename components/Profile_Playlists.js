import React, {Component} from 'react';
import { FlatList, StyleSheet, View, ScrollView, Text, Image, Dimensions } from 'react-native';
import { Icon, Avatar, ListItem } from 'react-native-elements'

class ListElement extends Component {
  render () {
    return (
      <ListItem
        onPress={() => alert('You pressed the Playlist!')}
        title={this.props.title}
        subtitle={this.props.subtitle}
        leftElement=
          <Image 
            source={this.props.displayPic}
            style={{width: 57,height: 57}}
          />
      />
    )
  }
}

const DATA = [
  {
    key:0,
    title: 'Playlist Title',
    subtitle: '8 songs',
    displayPic: require('../assets/empty_album_art.png'),
  },
  {
    key:1,
    title: 'Another Playlist Title',
    subtitle: '12 songs',
    displayPic: require('../assets/empty_album_art.png'),
  },
  {
    key:2,
    title: 'A Third Playlist',
    subtitle: '10 songs',
    displayPic: require('../assets/empty_album_art.png'),
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
            <ListElement
                title={item.title}
                subtitle={item.subtitle}
                displayPic={item.displayPic}
            />
          )}
        />
        <Text style={{fontSize:18, fontWeight:'bold', marginBottom:10}}>Favorite Genres</Text>
        <FlatList 
          style={{marginBottom:10}}
          data={DATA}
          renderItem={({ item }) => (
            <ListElement
                title={item.title}
                subtitle={item.subtitle}
                displayPic={item.displayPic}
            />
          )}
        />
        <Text style={{fontSize:18, fontWeight:'bold', marginBottom:10}}>Favorite Artists</Text>
        <FlatList 
          style={{marginBottom:10}}
          data={DATA}
          renderItem={({ item }) => (
            <ListElement
                title={item.title}
                subtitle={item.subtitle}
                displayPic={item.displayPic}
            />
          )}
        />
      </ScrollView>
    )
  }
}