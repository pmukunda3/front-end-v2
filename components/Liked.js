import React, { Component } from 'react';
import { Icon, SearchBar, ListItem, Button } from 'react-native-elements';
import EmptyScreen from './EmptyScreen';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

class Playlist extends Component {
  render() {
    return (
      <ListItem
        title={this.props.title}
        subtitle={this.props.creator}
        leftElement={<Image
          source={this.props.albumArt}
          style={{ width: 50, height: 50 }}
        />}
        rightElement={<View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              color: '#aaa',
              textAlignVertical: 'center',
              marginRight: 5,
            }}>
            {this.props.likes}
          </Text>
          <Icon name="heart" type="material-community" size={25} />
        </View>}
        onPress={() => this.onPress()}
      />
    );
  }
  onPress() {
    this.props.navigation.push('Playlist',
    {
      title: this.props.title,
      creator: this.props.creator,
      albumArt: this.props.albumArt
    })
  }
}

export default class LikedScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Liked Playlists',
      headerRight: () => (
        <Button
          icon={
            <Icon
              name="plus"
              type="material-community"
              size={20}
              color="black"
            />
          }
          type="outline"
          onPress={() => navigation.navigate('NewPlaylist')}
          buttonStyle={{ marginRight: 10 }}
        />
      ),
    };
  };
  render() {
    return (
      <ScrollView>
        <MySearchBar />
        <FlatList
          style={{}}
          data={DATA}
          renderItem={({ item }) => (
            <Playlist
              title={item.title}
              creator={item.creator}
              albumArt={item.albumArt}
              likes={item.likes}
              navigation={this.props.navigation}
            />
          )}
        />
      </ScrollView>
    );
  }
}

class MySearchBar extends Component {
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
        containerStyle={{ backgroundColor: 'white' }}
        inputContainerStyle={{ backgroundColor: '#eee' }}
      />
    );
  }
}

const DATA = [
  {
    key:0,
    title: 'Playlist Title',
    creator: 'User 0',
    albumArt: require('../assets/empty_album_art.png'),
    likes: 12,
  },
  {
    key:1,
    title: 'Another Playlist Title',
    creator: 'User 1',
    albumArt: require('../assets/empty_album_art.png'),
    likes: 94,
  },
  {
    key:2,
    title: 'A Third Playlist',
    creator: 'User 2',
    albumArt: require('../assets/empty_album_art.png'),
    likes: 101,
  },
  {
    key:3,
    title: 'Fourth Playlist Here',
    creator: 'User 3',
    albumArt: require('../assets/empty_album_art.png'),
    likes: 39,
  },
  {
    key:4,
    title: 'Summer Playlist',
    creator: 'User 4',
    albumArt: require('../assets/empty_album_art.png'),
    likes: 55,
  },
  {
    key:5,
    title: 'Halloween Playlist',
    creator: 'User 5',
    albumArt: require('../assets/empty_album_art.png'),
    likes: 78,
  },
  {
    key:6,
    title: 'Songs that remind me of Animal Crossing',
    creator: 'User 6',
    albumArt: require('../assets/empty_album_art.png'),
    likes: 3,
  },
  {
    key:7,
    title: 'Lo-Fi Beats to Study To',
    creator: 'User 7',
    albumArt: require('../assets/empty_album_art.png'),
    likes: 124,
  },
];
