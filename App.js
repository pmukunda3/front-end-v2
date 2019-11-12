import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Icon, Avatar } from 'react-native-elements'
import FeedScreen from './components/Feed'
import LikedStack from './components/PlaylistTab'
import SearchScreen from './components/Search'
import ProfileScreen from './components/Profile'

class EmptyScreen extends Component {
  render()
  {
    return null
  }
}

const FeedStack = createStackNavigator({
  Feed: FeedScreen
})

const SearchStack = createStackNavigator({
  Search: SearchScreen
})

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
})

const TabNavigator = createBottomTabNavigator(
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
        if (routeName === 'Feed') {
          return <Icon name='ios-home' type='ionicon' color={tintColor}/>;
        } 
        else if (routeName === 'Liked') {
          return <Icon name='ios-albums' type='ionicon' color={tintColor}/>;
        }
        else if (routeName === 'Search') {
          return <Icon name='ios-search' type='ionicon' color={tintColor}/>;
        }
        if (routeName === 'Profile') {
          return <Avatar rounded icon={{name: 'person', type: 'material'}} size="small"/>
        }
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
