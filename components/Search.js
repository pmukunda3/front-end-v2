import React, {Component} from 'react';
import { FlatList, StyleSheet, View, Text, Image } from 'react-native';
import { SearchBar } from 'react-native-elements'

export default class SearchScreen extends Component {
  static navigationOptions = {
    title: 'Search'
  }
  render() {
    return (
        <View>
          <Search_Bar />
          <View style={{marginTop:10, marginLeft:20}}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>Recent Searches</Text>
            <FlatList 
            style={{}}
            data={DATA}
            renderItem={({ item }) => (
              <RecentSearch
                title={item.title}
                subtitle={item.subtitle}
                displayPic={item.displayPic}
              />
            )}
          />
          </View>
          <View style={{marginTop:10, marginLeft:20}}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>Trending Playlists</Text>
            <FlatList 
            style={{}}
            data={DATA}
            renderItem={({ item }) => (
              <RecentSearch
                title={item.title}
                subtitle={item.subtitle}
                displayPic={item.displayPic}
              />
            )}
          />
          </View>
        </View>
    );
  }
}

class RecentSearch extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', marginTop:10 ,fontSize: 18}}>
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
        placeholder="Search for songs, playlists or users"
        onChangeText={this.updateSearch}
        value={search}
        lightTheme={true}
      />
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
];
