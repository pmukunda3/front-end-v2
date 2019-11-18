import React, {Component} from 'react';
import { FlatList, StyleSheet, View,  Image, Dimensions } from 'react-native';
import { Icon, Avatar, ListItem, Text } from 'react-native-elements'
import {createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import EmptyScreen from './EmptyScreen'
import ProfilePlaylistsScreen from './ProfilePlaylistsScreen'
import NotificationsScreen from './Profile_Notifications'

const screenWidth = Dimensions.get('window').width;

export default class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Profile',
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#316D88',
      }
    };
  };
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{padding:20, alignItems:'center', justifyContent:'flex-start',flexDirection:'row'}}>
          <Avatar rounded
            source={this.props.navigation.getParam('avatar', require('../assets/empty_profile_pic.png'))}
            size="large"/>
          <View style={{marginLeft:20}}>
            <Text h4>{this.props.navigation.getParam('user', 'User')}</Text>
            <View style={{flexDirection:'row', marginTop:10}}>
              <View>
                <Text>Followers</Text>
                <Text>Trusted Curators</Text>
              </View>
              <View style={{marginLeft:20}}>
                <Text style={{fontWeight:'bold'}}>58</Text>
                <Text style={{fontWeight:'bold'}}>18</Text>
              </View>
            </View>
          </View>
        </View>
        <ProfilePlaylistsScreen navigation={this.props.navigation}/>
      </View>
    );
  }
}