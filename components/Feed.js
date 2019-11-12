import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import { Icon, Avatar, Button, ListItem } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class LikeButton extends Component {
  render() {
    return (
      <Button
        type='clear'
        icon={<Icon name="heart-outline" type="material-community" size={25} />}
        title={this.props.title}
        titleStyle={{color:'#aaa', fontFamily:'roboto', marginLeft:5}}
        onPress={() => alert('You pressed the Like button!')}
      />
    );
  }
}

class CommentButton extends Component {
  render() {
    return (
      <Button
        type='clear'
        icon={<Icon name="comment-outline" type="material-community" size={25}/>}
        title={this.props.title}
        titleStyle={{color:'#aaa', fontFamily:'roboto', marginLeft:5}}
        onPress={() => alert('You pressed the Comment button!')}
      />
    );
  }
}

class SpotifyButton extends Component {
  render() {
    return (
      <Button
        type='clear'
        icon={<Icon name="social-spotify" type="simple-line-icon" size={25} />}
        onPress={() => alert('You pressed the Spotify button!')}
      />
    );
  }
}

class ContributeButton extends Component {
  render() {
    return (
      <Button
        type='clear'
        icon={<Icon name="music-note" type="material-community" size={25}/>}
        title='Contribute'
        titleStyle={{color:'#aaa', fontFamily:'roboto'}}
        onPress={() => alert('You pressed the Contribute button!')}
      />
    );
  }
}

class Post extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={() => alert('You pressed the Post!')}
        underlayColor="#eee">
        <View style={styles.post}>
          <View style={{ width: 50 }}>
            <Avatar
              rounded
              icon={{ name: 'person', type: 'material' }}
              size="medium"
            />
          </View>
          <View style={{ flex: 1, paddingLeft: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.profileName}>{this.props.profileName}</Text>
              </View>
              <View>
                <Text style={styles.timestamp}>{this.props.timestamp}</Text>
              </View>
            </View>
            <Text style={styles.postText}>{this.props.postText}</Text>
            <Image style={styles.albumArt} source={this.props.albumArt} />
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <LikeButton title={this.props.saves}/>
                <CommentButton title={this.props.comments}/>
                <SpotifyButton />
              </View>
              <View style={{ alignItems: 'flex-end', flexDirection: 'row' }}>
                <ContributeButton />
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default class FeedScreen extends Component {
  static navigationOptions = {
    title: 'My Feed',
    headerRight: () => (
      <Button
        icon={
          <Icon name="plus" type="material-community" size={20} color="black" />
        }
        type="outline"
        onPress={() => alert('You pressed the New Playlist button!')}
        buttonStyle={{ marginRight: 10 }}
      />
    ),
  };
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
              saves={item.saves}
              comments={item.comments}
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
    saves: 40,
    comments: 78,
  },
  {
    profileName: 'Jenny S.',
    profilePic: require('../assets/empty_profile_pic.png'),
    timestamp: '8 minutes ago',
    postText: 'Lorem ipsum dolor sit amet consectetur #lorem #adipiscingelit',
    albumArt: require('../assets/empty_album_art.png'),
    saves: 32,
    comments: 12,
  },
  {
    profileName: 'Samuel L.',
    profilePic: require('../assets/empty_profile_pic.png'),
    timestamp: '14 minutes ago',
    postText: 'Lorem ipsum dolor sit?? #lorem #consectetur #adipiscingelit',
    albumArt: require('../assets/empty_album_art.png'),
    saves: 100,
    comments: 65,
  },
];

const styles = StyleSheet.create({
  post: {
    flexDirection: 'row',
    padding: 10,
    fontSize: 18,
  },
  profileName: {
    fontWeight: 'bold',
  },
  timestamp: {
    color: '#aaa',
    textAlign: 'right',
  },
  postText: {},
  albumArt: {
    width: 180,
    height: 180,
    marginTop: 10,
  },
});
