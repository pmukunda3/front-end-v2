import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import { Icon, Avatar, Button, ListItem } from 'react-native-elements';
import Playlists from './Data'

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
    let playlist = Playlists.find(element => element.key == this.props.playlistID)
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
            <TouchableHighlight
              onPress={() => this.onPlaylistPress()}
              underlayColor="#eee">
              <View style={{flexDirection:'row', marginTop: 10}}> 
                <Image 
                  style={{width: 100, height: 100}} 
                  source={playlist.albumArt} 
                />
                <View style={{marginLeft:10}}>
                  <Text style={{fontWeight:'bold'}}>{playlist.title}</Text>
                  <Text style={{color:'gray'}}>{playlist.user}</Text>
                </View>
              </View>
            </TouchableHighlight>
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
      playlistID: this.props.playlistID,
      likes: this.props.likes,
      comments: this.props.comments,
    })
  }
  onPlaylistPress() {
    this.props.navigation.push('Playlist',
    {
      playlistID: this.props.playlistID
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
              playlistID={item.id}
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