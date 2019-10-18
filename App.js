import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
// import Icon from 'react-native-ionicons'
import FeedScreen from './components/Feed'
import LikedScreen from './components/Liked'
import SearchScreen from './components/Search'

const FeedStack = createStackNavigator({
  Feed: FeedScreen
})

const LikedStack = createStackNavigator({
  Liked: LikedScreen
})

const SearchStack = createStackNavigator({
  Search: SearchScreen
})

const TabNavigator = createBottomTabNavigator(
  {
  Feed: FeedStack,
  Liked: LikedStack,
  Search: SearchStack,
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

export default createAppContainer(TabNavigator);
