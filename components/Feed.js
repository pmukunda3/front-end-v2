import React, {Component} from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

class Post extends Component {
  render() {
    return (
      <View style={styles.post}>
        <View style={styles.leftColumn}>
          <Image source={this.props.profilePic} style={styles.profilePic} />
        </View>
        <View style={styles.rightColumn}>
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
          <View style={{ flexDirection: 'row', marginTop:10 }}>
            <View style={{ flex: 1, flexDirection:'row' }}>
              <Ionicons name='ios-thumbs-up' size={25} style={{marginRight:10}}/>
              <FontAwesome5 name='spotify' size={25}/>
            </View>
            <View>
              <Text style={styles.timestamp}>{this.props.comments}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default class FeedScreen extends Component {
  static navigationOptions = {
    title: 'My Feed'
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
                profileName={item.username}
                profilePic={item.profilePic}
                timestamp={item.dateTime}
                postText={item.text}
                albumArt={item.albumArt}
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
    comments: '88 comments'
  },
  {
    profileName: 'Jenny S.',
    profilePic: require('../assets/empty_profile_pic.png'),
    timestamp: '8 minutes ago',
    postText: 'Lorem ipsum dolor sit amet consectetur #lorem #adipiscingelit',
    albumArt: require('../assets/empty_album_art.png'),
    comments: '24 comments'
  },
  {
    profileName: 'Samuel L.',
    profilePic: require('../assets/empty_profile_pic.png'),
    timestamp: '14 minutes ago',
    postText: 'Lorem ipsum dolor sit?? #lorem #consectetur #adipiscingelit',
    albumArt: require('../assets/empty_album_art.png'),
    comments: '148 comments'
  },
];


const styles = StyleSheet.create({
  post: {
    flexDirection: 'row',
    padding: 10,
    fontSize: 18,
  },
  leftColumn: {
    width: 60,
  },
  profilePic: {
    width: 57,
    height: 57,
    borderRadius: 57 / 2,
  },
  rightColumn: {
    flex: 1,
    paddingLeft: 10,
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
    marginTop: 10
  }
});