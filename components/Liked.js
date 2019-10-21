import React, {Component} from 'react';
import { SearchBar } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { FlatList, ScrollView, StyleSheet, View, Text, Image } from 'react-native';

class ListElement extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row',padding: 10,fontSize: 18}}>
        <View style={{width: 60}}>
          <Image source={this.props.displayPic} style={{width: 57,height: 57}} />
        </View>
        <View style={{flex: 1, paddingLeft: 10}}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 4 }}>
              <Text>{this.props.title}</Text>
              <Text style={{color: '#aaa'}}>{this.props.subtitle}</Text>
            </View>
            <View style={{ marginLeft:10, flex:1, flexDirection: 'row',alignItems:'flex-end' }}>
              <Ionicons name='ios-download' size={25} style={{marginRight:5}}/>
              <Text style={{color: '#aaa'}}>{this.props.saves}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class Search_Bar extends Component{
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Search in your Liked Playlists"
        onChangeText={this.updateSearch}
        value={search}
        lightTheme={true}
      />
    );
  }
}

export default class LikedScreen extends Component {
  static navigationOptions = {
    title: 'Liked Playlists'
  }
  render() {
    return (
        <ScrollView>
          <Search_Bar />
          <FlatList 
            style={{}}
            data={DATA}
            renderItem={({ item }) => (
              <ListElement
                title={item.title}
                subtitle={item.subtitle}
                displayPic={item.displayPic}
                saves={item.saves}
              />
            )}
          />
        </ScrollView>
    );
  }
}

const DATA = [
  {
    title: 'Playlist Title',
    subtitle: '8 songs',
    displayPic: require('../assets/empty_album_art.png'),
    saves:12,
  },
  {
    title: 'Another Playlist Title',
    subtitle: '12 songs',
    displayPic: require('../assets/empty_album_art.png'),
    saves:94,
  },
  {
    title: 'A Third Playlist',
    subtitle: '10 songs',
    displayPic: require('../assets/empty_album_art.png'),
    saves:101,
  },
  {
    title: 'Fourth Playlist Here',
    subtitle: '15 songs',
    displayPic: require('../assets/empty_album_art.png'),
    saves:39,
  },
  {
    title: 'Summer Playlist',
    subtitle: '9 songs',
    displayPic: require('../assets/empty_album_art.png'),
    saves:55,
  },
  {
    title: 'Halloween Playlist',
    subtitle: '11 songs',
    displayPic: require('../assets/empty_album_art.png'),
    saves:78,
  },
  {
    title: 'Songs that remind me of Animal Crossing',
    subtitle: '15 songs',
    displayPic: require('../assets/empty_album_art.png'),
    saves:3,
  },
  {
    title: 'Lo-Fi Beats to Study To',
    subtitle: '15 songs',
    displayPic: require('../assets/empty_album_art.png'),
    saves:124,
  },
];