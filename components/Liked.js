import React, {Component} from 'react';
import { SearchBar } from 'react-native-elements'
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
            <View style={{ flex: 1 }}>
              <Text>{this.props.title}</Text>
              <Text style={{color: '#aaa'}}>{this.props.subtitle}</Text>
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
      />
    );
  }
}

export default class LikedScreen extends Component {
  static navigationOptions = {
    title: 'Liked'
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
  {
    title: 'Fourth Playlist Here',
    subtitle: '15 songs',
    displayPic: require('../assets/empty_album_art.png'),
  },
  {
    title: 'Summer Playlist',
    subtitle: '9 songs',
    displayPic: require('../assets/empty_album_art.png'),
  },
  {
    title: 'Halloween Playlist',
    subtitle: '11 songs',
    displayPic: require('../assets/empty_album_art.png'),
  },
  {
    title: 'Songs that remind me of Animal Crossing',
    subtitle: '15 songs',
    displayPic: require('../assets/empty_album_art.png'),
  },
  {
    title: 'Lo-Fi Beats to Study To',
    subtitle: '15 songs',
    displayPic: require('../assets/empty_album_art.png'),
  },
];