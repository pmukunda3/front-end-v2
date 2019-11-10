import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { Icon, Avatar } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

class Post extends Component {
  render() {
    return (
      <View style={styles.post}>
        <View style={{width: 50}}>
          <Avatar rounded icon={{name: 'person', type: 'material'}} size="medium"/>
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
          <Image style={styles.albumArt} source={this.props.albumArt} />
          <View style={{ flexDirection: 'row', marginTop:10 }}>
            <View style={{ flex: 1, flexDirection:'row' }}>
              <Icon name='ios-heart-empty' type='ionicon' size={25} iconStyle={{marginRight:5}}/>
              <Text style={{color: '#aaa',marginRight:15,textAlignVertical:'center'}}>{this.props.saves}</Text>
              <Icon name='comment-o' type='font-awesome' size={25} iconStyle={{marginRight:5}}/>
              <Text style={{color: '#aaa',marginRight:15,textAlignVertical:'center'}}>{this.props.comments}</Text>
              <Icon name='social-spotify' type='simple-line-icon' size={25}/>
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
  postText: {},
  albumArt: {
    width: 180,
    height: 180,
    marginTop: 10
  }
});

