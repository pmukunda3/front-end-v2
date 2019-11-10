import React, {Component} from 'react';
import { FlatList, StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { Icon, Avatar } from 'react-native-elements'
import {createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import EmptyScreen from './EmptyScreen'
import ProfilePlaylistsScreen from './Profile_Playlists'
import NotificationsScreen from './Profile_Notifications'

const screenWidth = Dimensions.get('window').width;

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile'
  }
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{padding:20, alignItems:'center', justifyContent:'center',flexDirection:'row'}}>
          <Avatar rounded icon={{name: 'person', type: 'material'}} size="xlarge"/>
          <View style={{marginLeft:20}}>
            <Text style={{fontSize:24, fontWeight:'bold'}}>Katherine L.</Text>
            <View style={{flexDirection:'row', marginTop:10}}>
              <View>
                <Text>Trusted curators</Text>
                <Text>Followers</Text>
                <Text>Playlist Likes</Text>
              </View>
              <View style={{marginLeft:50}}>
                <Text style={{fontWeight:'bold'}}>58</Text>
                <Text style={{fontWeight:'bold'}}>18</Text>
                <Text style={{fontWeight:'bold'}}>225</Text>
              </View>
            </View>
          </View>
        </View>
        <TabNavContainer />
      </View>
    );
  }
}

const TabNav = createMaterialTopTabNavigator(
  {
    Playlists: ProfilePlaylistsScreen,
    Notifications: NotificationsScreen,
  },
  {
    tabBarOptions: {
        style: { backgroundColor: 'white'},
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
        showIcon: true
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Playlists') {
          return <Icon name='ios-albums' type='ionicon' color={tintColor}/>;
        } 
        else if (routeName === 'Notifications') {
          return <Icon name='ios-notifications' type='ionicon' color={tintColor}/>;
        }
      },
    }),
  }
);

const TabNavContainer = createAppContainer(TabNav);