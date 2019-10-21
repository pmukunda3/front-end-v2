import React, {Component} from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { Avatar } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

class Post extends Component {
  render() {
    return (
      <View style={styles.post}>
        <View style={{width: 50}}>
          <Image style={styles.profilePic} source={this.props.profilePic} />
        </View>
        <View style={{flex: 1,paddingLeft: 10}}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.profileName}>{this.props.profileName}</Text>
            </View>
            <View>
              <Text style={styles.timestamp}>{this.props.timestamp}</Text>
            </View>
          </View>
          <Text style={styles.postText}>{this.props.postText}</Text>
          <Text style={styles.link} onPress={() => Linking.openURL(String(this.props.postLink))}> 
              {this.props.postLink}
          </Text>
          <Image style={styles.albumArt} source={this.props.albumArt} />
          <View style={{ flexDirection: 'row', marginTop:10 }}>
            <View style={{ flex: 1, flexDirection:'row' }}>
              <Ionicons name='ios-download' size={25} style={{marginRight:5}}/>
              <Text style={{color: '#aaa',marginRight:15,textAlignVertical:'center'}}>{this.props.saves}</Text>
              <Ionicons name='ios-chatboxes' size={25} style={{marginRight:5}}/>
            </View>
            <View style={{alignItems:'flex-end', flexDirection:'row' }}>
              <Ionicons name='ios-musical-notes' size={25} style={{marginRight:5}}/>
              <Text style={{color:'#aaa', textAlignVertical:'center', marginRight:10}}>Contribute</Text>
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
                profilePic={{uri: item.profilePic}}
                timestamp={item.dateTime}
                postText={item.text}
                postLink={item.link}
                albumArt={{uri: item.albumArt}}
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
    saves:40,
    comments: 78
  },
  {
    profileName: 'Jenny S.',
    profilePic: require('../assets/empty_profile_pic.png'),
    timestamp: '8 minutes ago',
    postText: 'Lorem ipsum dolor sit amet consectetur #lorem #adipiscingelit',
    albumArt: require('../assets/empty_album_art.png'),
    saves:32,
    comments: 12
  },
  {
    profileName: 'Samuel L.',
    profilePic: require('../assets/empty_profile_pic.png'),
    timestamp: '14 minutes ago',
    postText: 'Lorem ipsum dolor sit?? #lorem #consectetur #adipiscingelit',
    albumArt: require('../assets/empty_album_art.png'),
    saves:100,
    comments: 65
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
  profilePic: {
    width: 57,
    height: 57,
    borderRadius: 57 / 2,
  },
  link: {
    color: 'purple',
    fontSize:16,
    flex:1,
    flexWrap: 'wrap',
  },
  postText: {},
  albumArt: {
    width: 180,
    height: 180,
    marginTop: 10
  }
});