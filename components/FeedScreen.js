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

class LikeButton extends Component {
  render() {
    return (
      <Button
        type='clear'
        icon={<Icon name="heart-outline" type="material-community" size={25} />}
        title={this.props.title}
        titleStyle={{color:'#aaa', marginLeft:5}}
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
        titleStyle={{color:'#aaa', marginLeft:5}}
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
        titleStyle={{color:'#aaa'}}
        onPress={() => alert('You pressed the Contribute button!')}
      />
    );
  }
}

class Post extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={() => this.onPress()}
        underlayColor="#eee">
        <View style={{flexDirection: 'row', padding: 10}}>
          <View style={{ width: 50 }}>
            <Avatar
              rounded
              source={this.props.profilePic}
              size="medium"
            />
          </View>
          <View style={{ flex: 1, paddingLeft: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{fontWeight: 'bold'}}>{this.props.profileName}</Text>
              </View>
              <View>
                <Text  style={{color: '#aaa',textAlign: 'right'}}>{this.props.timestamp}</Text>
              </View>
            </View>
            <Text>{this.props.postText}</Text>
            <View style={{flexDirection:'row', marginTop: 10}}> 
              <Image style={{width: 100, height: 100}} source={this.props.playlist.albumArt} />
              <View style={{marginLeft:10}}>
                <Text style={{fontWeight:'bold'}}>{this.props.playlist.title}</Text>
                <Text style={{color:'gray'}}>{this.props.playlist.creator}</Text>
              </View>
            </View>
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
  onPress() {
    this.props.navigation.push('Post',
    {
      profileName: this.props.profileName,
      profilePic: this.props.profilePic,
      timestamp: this.props.timestamp,
      postText: this.props.postText,
      playlist: this.props.playlist,
      saves: this.props.saves,
      comments: this.props.comments,
    })
  }
}

export default class FeedScreen extends Component {
  static navigationOptions = ({navigation}) => { 
    return {
      title: 'My Feed',
      headerRight: () => (
        <Button
          icon={
            <Icon name="plus" type="material-community" size={20} color="black" />
          }
          type="outline"
          onPress={() => alert('You pressed the New Post button!')}
          buttonStyle={{ marginRight: 10 }}
        />
      ),
    };
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
              playlist={item.playlist}
              saves={item.saves}
              comments={item.comments}
              navigation={this.props.navigation}
            />
          )}
        />
      </View>
    );
  }
}

const DATA = [
  {
    key:0,
    profileName: 'Dmitri L.',
    profilePic: require('../assets/empty_profile_pic.png'),
    timestamp: '2 minutes ago',
    postText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. #lorem #adipiscingelit',
    playlist:
    {
      key:0,
      title: 'Playlist Title',
      creator: 'User 0',
      albumArt: require('../assets/empty_album_art.png'),
      likes: 12,
    },
    albumArt: require('../assets/empty_album_art.png'),
    saves: 40,
    comments: 78,
  },
  {
    key:1,
    profileName: 'Jenny S.',
    profilePic: require('../assets/empty_profile_pic.png'),
    timestamp: '8 minutes ago',
    postText: 'Lorem ipsum dolor sit amet consectetur #lorem #adipiscingelit',
    playlist:
    {
      key:1,
      title: 'Another Playlist Title',
      creator: 'User 1',
      albumArt: require('../assets/empty_album_art.png'),
      likes: 94,
    },
    saves: 32,
    comments: 12,
  },
  {
    key:2,
    profileName: 'Samuel L.',
    profilePic: require('../assets/empty_profile_pic.png'),
    timestamp: '14 minutes ago',
    postText: 'Lorem ipsum dolor sit?? #lorem #consectetur #adipiscingelit',
    playlist:
    {
      key:2,
      title: 'A Third Playlist',
      creator: 'User 2',
      albumArt: require('../assets/empty_album_art.png'),
      likes: 101,
    },
    saves: 100,
    comments: 65,
  },
];
