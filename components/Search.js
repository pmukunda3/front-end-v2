import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import { SearchBar, ListItem, Button, Icon, Tile } from 'react-native-elements';

var { height, width } = Dimensions.get('window');

class PlaylistVertical extends Component {
  render() {
    return (
      <ListItem
        onPress={() => alert('You pressed the Playlist!')}
        title={this.props.title}
        subtitle={this.props.subtitle}
        leftElement={
          <Image
            source={this.props.image}
            style={{ width: 57, height: 57 }}
          />
        }
        rightElement={
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: '#aaa',
                textAlignVertical: 'center',
                marginRight: 5,
              }}>
              {this.props.saves}
            </Text>
          </View>
        }
      />
    );
  }
}

export default class SearchScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Explore',
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
    }
  }
  render() {
    return (
      <ScrollView>
        <MySearchBar />
        <View style={{ marginTop: 10, marginLeft: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Recent Searches
          </Text>
          <FlatList
            style={{}}
            data={DATA}
            renderItem={({ item }) => (
              <PlaylistVertical
                title={item.title}
                subtitle={item.subtitle}
                image={item.displayPic}
              />
            )}
          />
        </View>
        <View style={{ marginTop: 10, marginLeft: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Trending Playlists
          </Text>
          <FlatList
            style={{ marginTop: 10}}
            data={DATA}
            renderItem={({ item }) => (
              <PlaylistVertical
                title={item.title}
                subtitle={item.subtitle}
                image={item.displayPic}
              />
            )}
          />
        </View>
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
        placeholder="Search for songs, playlists or users"
        onChangeText={this.updateSearch}
        value={search}
        containerStyle={{backgroundColor:'white'}}
        inputContainerStyle={{backgroundColor:'#eee'}}
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
    title: 'Another Playlist',
    subtitle: '12 songs',
    displayPic: require('../assets/empty_album_art.png'),
  },
  {
    title: 'A Third Playlist',
    subtitle: '10 songs',
    displayPic: require('../assets/empty_album_art.png'),
  },
];
