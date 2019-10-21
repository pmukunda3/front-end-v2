import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons'
import { Ionicons } from '@expo/vector-icons';
// import Icon from 'react-native-ionicons'
import FeedScreen from './components/Feed'
import LikedScreen from './components/Liked'
import SearchScreen from './components/Search'
import ProfileScreen from './components/Profile'
// For React Native
// import { withAuthenticator } from 'aws-amplify-react-native';
// import * as Facebook from 'expo-facebook';


class EmptyScreen extends Component {
  render()
  {
    return null
  }
}



const FeedStack = createStackNavigator({
  Feed: FeedScreen
})

const LikedStack = createStackNavigator({
  Liked: LikedScreen
})

const SearchStack = createStackNavigator({
  Search: SearchScreen
})

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
})

export default createBottomTabNavigator(
  
  {
  Feed: FeedStack,
  Liked: LikedStack,
  Search: SearchStack,
  Profile: ProfileStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Feed') {
          iconName = `ios-menu`;
        } 
        else if (routeName === 'Liked') {
          iconName = `ios-musical-notes`;
        }
        else if (routeName === 'Search') {
          iconName = `ios-search`;
        }
        else if (routeName === 'Profile') {
          iconName = `ios-person`;
        }
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showLabel: false
    },
  }
)