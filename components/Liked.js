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

class ListElement extends Component {
  render() {
    return (
      <ListItem
        title={this.props.title}
        subtitle={this.props.subtitle}
        leftElement={<Image
          source={this.props.displayPic}
          style={{ width: 50, height: 50 }}
        />}
        rightElement={<View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              color: '#aaa',
              textAlignVertical: 'center',
              marginRight: 5,
            }}>
            {this.props.saves}
          </Text>
          <Icon name="ios-heart" type="ionicon" size={25} />
        </View>}
        onPress={() => this.onPress()}
      />
    );
  }
  onPress() {
    this.props.navigation.push('Playlist',
    {
      title: this.props.title,
      subtitle: this.props.subtitle,
      displayPic: this.props.displayPic
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
            <ListElement
              title={item.title}
              subtitle={item.subtitle}
              displayPic={item.displayPic}
              saves={item.saves}
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
    title: 'Playlist Title',
    subtitle: '8 songs',
    displayPic: require('../assets/empty_album_art.png'),
    saves: 12,
  },
  {
    title: 'Another Playlist Title',
    subtitle: '12 songs',
    displayPic: require('../assets/empty_album_art.png'),
    saves: 94,
  },
  {
    title: 'A Third Playlist',
    subtitle: '10 songs',
    displayPic: require('../assets/empty_album_art.png'),
    saves: 101,
  },
  {
    title: 'Fourth Playlist Here',
    subtitle: '15 songs',
    displayPic: require('../assets/empty_album_art.png'),
    saves: 39,
  },
  {
    title: 'Summer Playlist',
    subtitle: '9 songs',
    displayPic: require('../assets/empty_album_art.png'),
    saves: 55,
  },
  {
    title: 'Halloween Playlist',
    subtitle: '11 songs',
    displayPic: require('../assets/empty_album_art.png'),
    saves: 78,
  },
  {
    title: 'Songs that remind me of Animal Crossing',
    subtitle: '15 songs',
    displayPic: require('../assets/empty_album_art.png'),
    saves: 3,
  },
  {
    title: 'Lo-Fi Beats to Study To',
    subtitle: '15 songs',
    displayPic: require('../assets/empty_album_art.png'),
    saves: 124,
  },
];
