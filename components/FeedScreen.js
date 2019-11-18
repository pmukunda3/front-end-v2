import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';
import { Icon, Avatar, Button, ListItem } from 'react-native-elements';
import { Linking } from 'expo'

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
              source={this.props.avatar}
              size="medium"
              onPress={() => this.onUserPress()}
            />
          </View>
          <View style={{ flex: 1, paddingLeft: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Button
                title={this.props.user}
                titleStyle={{color:'black'}}
                type='clear'
                buttonStyle={{padding:0}}
                onPress={() => this.onUserPress()}
              />
              <View style={{ flex: 1 }}></View>
              <Text style={{color: '#aaa',textAlign: 'right'}}>{this.props.timestamp}</Text>            
            </View>
            <Text>{this.props.text}</Text>
            <Text 
              style={{
                color: '#35B5BB',
                fontSize:16,
                flex:1,
                flexWrap: 'wrap',
              }} 
              onPress={() => Linking.openURL(String(this.props.postLink))}
            > 
              {this.props.postLink}
            </Text>
            <View style={{flexDirection:'row', marginTop: 10}}> 
              <Image style={{width: 100, height: 100}} source={defaultPlaylist.albumArt} />
              {/* <Image style={{width: 100, height: 100}} source={this.props.playlist.albumArt} /> */}
              <View style={{marginLeft:10}}>
                <Text style={{fontWeight:'bold'}}>{defaultPlaylist.title}</Text>
                <Text style={{color:'gray'}}>{defaultPlaylist.creator}</Text>
                {/* <Text style={{fontWeight:'bold'}}>{this.props.playlist.title}</Text>
                <Text style={{color:'gray'}}>{this.props.playlist.creator}</Text> */}
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <LikeButton title={this.props.likes}/>
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
      user: this.props.user,
      avatar: this.props.avatar,
      timestamp: this.props.timestamp,
      text: this.props.text,
      playlist: defaultPlaylist,
      // playlist: this.props.playlist,
      likes: this.props.likes,
      comments: this.props.comments,
    })
  }
  onUserPress() {
    this.props.navigation.push('Profile',
    {
      user: this.props.user,
      avatar: this.props.avatar
    })
  }
}

export default class FeedScreen extends Component {
  static navigationOptions = ({navigation}) => { 
    return {
      title: 'My Feed',
      headerTitleStyle: {
        color: '#FFFFFF',
      },
      headerStyle: {
        backgroundColor: '#316D88'
      },
      headerRight: () => (
        <Button
          icon={
            <Icon name="plus" type="material-community" size={20} color="white" />
          }
          type="outline"
          onPress={() => navigation.navigate('NewPlaylist')}
          buttonStyle={{ marginRight: 10 }}
        />
      ),
    };
  }
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  componentDidMount() {
    // return fetch('https://facebook.github.io/react-native/movies.json')
    return fetch('http://Beatharmony-backend.jbzwzxptsd.us-east-2.elasticbeanstalk.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          postsSource: responseJson,
        }, function(){

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View>
        <FlatList
          data={this.state.postsSource}
          renderItem={({ item }) => (
            <Post
              user={item.username}
              avatar={{uri: item.profilePic}}
              timestamp={item.dateTime}
              text={item.text}
              postLink={item.link}
              playlist={item.playlist}
              likes={item.saves}
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
    user: 'Dmitri L.',
    avatar: require('../assets/empty_profile_pic.png'),
    timestamp: '2 minutes ago',
    text:
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
    likes: 40,
    comments: 78,
  },
  {
    key:1,
    user: 'Jenny S.',
    avatar: require('../assets/empty_profile_pic.png'),
    timestamp: '8 minutes ago',
    text: 'Lorem ipsum dolor sit amet consectetur #lorem #adipiscingelit',
    playlist:
    {
      key:1,
      title: 'Another Playlist Title',
      creator: 'User 1',
      albumArt: require('../assets/empty_album_art.png'),
      likes: 94,
    },
    likes: 32,
    comments: 12,
  },
  {
    key:2,
    user: 'Samuel L.',
    avatar: require('../assets/empty_profile_pic.png'),
    timestamp: '14 minutes ago',
    text: 'Lorem ipsum dolor sit?? #lorem #consectetur #adipiscingelit',
    playlist:
    {
      key:2,
      title: 'A Third Playlist',
      creator: 'User 2',
      albumArt: require('../assets/empty_album_art.png'),
      likes: 101,
    },
    likes: 100,
    comments: 65,
  },
];

const defaultPlaylist = 
{     
  key:0,
  title: 'Playlist Title',
  creator: 'User 0',
  albumArt: require('../assets/empty_album_art.png'),
  likes: 12,
}