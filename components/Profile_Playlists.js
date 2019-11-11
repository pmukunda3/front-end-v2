import React, {Component} from 'react';
import { FlatList, StyleSheet, View, ScrollView, Text, Image, Dimensions } from 'react-native';
import { Icon, Avatar, ListItem } from 'react-native-elements'

class ListElement extends Component {
  render () {
    return (
      <ListItem
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
    title: 'Playlist Title',
    subtitle: '8 songs',
    displayPic: require('../assets/empty_album_art.png'),
  },
  {
    title: 'Another Playlist Title',
    subtitle: '12 songs',
    displayPic: require('../assets/empty_album_art.png'),
  },
  {
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
          numColumns={3}
          data={DATA}
          renderItem={({ item }) => (
            <View style={{flex:1,marginHorizontal:5}}>
              <Image source={item.displayPic} style={{width: 100,height: 100}}/>
              <Text>{item.title}</Text>
              <Text style={{color: '#aaa'}}>{item.subtitle}</Text>
            </View>
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