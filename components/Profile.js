import React, {Component} from 'react';
import { FlatList, StyleSheet, View, Text, Image, Button, Dimensions } from 'react-native';
import { Icon, Avatar } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import {createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import EmptyScreen from './EmptyScreen'

const screenWidth = Dimensions.get('window').width;

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile'
  }
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{padding:20, alignItems:'center', justifyContent:'center',flexDirection:'row'}}>
          <Avatar 
            rounded 
            source={{
              uri:
                'https://avatars3.githubusercontent.com/u/20877012?s=460&v=4',
            }} 
            size="xlarge"
          />
          <View style={{marginLeft:20}}>
            <Text style={{fontSize:24, fontWeight:'bold'}}>Ankit</Text>
            <View style={{flexDirection:'row', marginTop:10}}>
              <View>
                <Text>Trusted curators</Text>
                <Text>Followers</Text>
                <Text>Playlist Likes</Text>
              </View>
              <View style={{marginLeft:50}}>
                <Text style={{fontWeight:'bold'}}>58</Text>
                <Text style={{fontWeight:'bold'}}>218</Text>
                <Text style={{fontWeight:'bold'}}>225</Text>
              </View>
            </View>
          </View>
        </View>
        <TabNavContainer />
        <View style={styles.container}>
          <Button title="Sign Out"/>
        </View>
      </View>
    );
  }
}

const TabNav = createMaterialTopTabNavigator(
  {
    Playlists: EmptyScreen,
    Notifications: EmptyScreen,
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
          return <Ionicons name='ios-albums' size={25} color={tintColor}/>;
        } 
        else if (routeName === 'Notifications') {
          return <Ionicons name='ios-notifications' size={25} color={tintColor}/>;
        }
      },
    }),
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabNavContainer = createAppContainer(TabNav);