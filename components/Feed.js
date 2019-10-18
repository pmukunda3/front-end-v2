import React, {Component} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Post from './Post';

export default class FeedScreen extends Component {
  static navigationOptions = {
    title: 'My Feed'
  }
  render() {
    return (
        <View>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Post
                profileName={item.profileName}
                profilePic={item.profilePic}
                timestamp={item.timestamp}
                postText={item.postText}
                albumArt={item.albumArt}
              />
            )}
          />
        </View>
    );
  }
}

const DATA = [
  {
    profileName: 'Dmitri L.',
    profilePic: require('../assets/empty_profile_pic.png'),
    timestamp: '2 minutes ago',
    postText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. #lorem #adipiscingelit',
    albumArt: require('../assets/empty_album_art.png'),
  },
  {
    profileName: 'Jenny S.',
    profilePic: require('../assets/empty_profile_pic.png'),
    timestamp: '1 hour ago',
    postText: 'Lorem ipsum dolor sit amet consectetur #lorem #adipiscingelit',
    albumArt: require('../assets/empty_album_art.png'),
  },
  {
    profileName: 'Samuel L.',
    profilePic: require('../assets/empty_profile_pic.png'),
    timestamp: '2 days ago',
    postText: 'Lorem ipsum dolor sit?? #lorem #consectetur #adipiscingelit',
    albumArt: require('../assets/empty_album_art.png'),
  },
];
