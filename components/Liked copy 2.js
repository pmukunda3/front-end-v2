import React, {Component} from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import Post from './Post';

export default class LikedScreen extends Component {
  static navigationOptions = {
    title: 'Liked'
  }
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  componentDidMount() {
    let postsApi = 'http://Beatharmony-backend.jbzwzxptsd.us-east-2.elasticbeanstalk.com/posts'
    let userIdApi = 'http://Beatharmony-backend.jbzwzxptsd.us-east-2.elasticbeanstalk.com/users/id/'
    
    fetch(postsApi)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          postsSource: responseJson,
        }, function(){

        }).then(() => {

          
          fetch(userIdApi + postsSource.)
            .then((response) => response.json())
            .then((responseJson) => {

            this.setState({
              isLoading: false,
              dataSource: responseJson,
            }, function(){

            });

          })
          .catch((error) => {
            console.error(error);
          });
          })

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

  //   return(
  //     <View style={{flex: 1, paddingTop:20}}>
  //       <FlatList
  //         data={this.state.dataSource}
  //         renderItem={({item}) => <Text>{item.text}, {item.link}</Text>}
  //         keyExtractor={({id}, index) => id}
  //       />
  //     </View>
  //   );
  // }
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
                postLink={item.postLink}
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
    postLink: "https://open.spotify.com/artist/2q8NnayQRRAtiiHgaHfkqc",
    postText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. #lorem #adipiscingelit',
    albumArt: require('../assets/empty_album_art.png'),
  },
  {
    username: 'Jenny J.',
    avatar: require('../assets/empty_profile_pic.png'),
    timestamp: '1 hour ago',
    postLink: "https://open.spotify.com/artist/2q8NnayQRRAtiiHgaHfkqc",
    postText: 'Lorem ipsum dolor sit amet consectetur #lorem #adipiscingelit',
    albumArt: require('../assets/empty_album_art.png'),
  },
  {
    profileName: 'Samuel L.',
    profilePic: require('../assets/empty_profile_pic.png'),
    timestamp: '2 days ago',
    postLink: "https://soundcloud.com/averma2/segovia",
    postText: 'Lorem ipsum dolor sit?? #lorem #consectetur #adipiscingelit',
    albumArt: require('../assets/empty_album_art.png'),
  },
];
