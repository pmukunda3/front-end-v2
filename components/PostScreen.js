import React, { Component } from 'react';
import { View, FlatList, ScrollView, TouchableHighlight } from 'react-native';
import { Text,  Input, Image, ListItem, Button, Icon, Avatar } from 'react-native-elements';
import EmptyScreen from './EmptyScreen';

export default class PostScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title:  'Post',
    };
  };
  render() {
    return (
      <ScrollView>
        <View style={{flexDirection: 'row', padding: 10}}>
          <View style={{ width: 50 }}>
            <Avatar
              rounded
              source={this.props.navigation.getParam('profilePic')}
              size="medium"
            />
          </View>
          <View style={{ flex: 1, paddingLeft: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{fontWeight: 'bold'}}>
                  {this.props.navigation.getParam('profileName')}
                </Text>
              </View>
              <View>
                <Text style={{color: 'gray',textAlign: 'right'}}>
                  {this.props.navigation.getParam('timestamp')}
                </Text>
              </View>
            </View>
            <Text>{this.props.navigation.getParam('postText')}</Text>
            <TouchableHighlight
              onPress={() => this.onPlaylistPress()}
              underlayColor="#eee">
              <View style={{flexDirection:'row', marginTop: 10}}> 
                <Image 
                  style={{width: 100, height: 100}} 
                  source={this.props.navigation.getParam('playlist').albumArt} 
                />
                <View style={{marginLeft:10}}>
                  <Text style={{fontWeight:'bold'}}>{this.props.navigation.getParam('playlist').title}</Text>
                  <Text style={{color:'gray'}}>{this.props.navigation.getParam('playlist').creator}</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  }
  onPlaylistPress() {
    alert("You pressed the Playlist!")
  }
}
