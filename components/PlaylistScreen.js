import React, { Component } from 'react';
import { View, FlatList, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Text,  Input, Image, ListItem, Button, Icon } from 'react-native-elements';
import {createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import EmptyScreen from './EmptyScreen';
import PlaylistSongsScreen from './Playlist_Songs';
import PlaylistCommentsScreen from './Playlist_Comments';

export default class PlaylistScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title:  'Playlist',
    };
  };
  render() {
    return (
      <ScrollView>
        <View style={{ flexDirection: 'row', height: 200 }}>
          <Image
            source={require('../assets/empty_album_art.png')}
            style={{ width: 150, height: 150 }}
            containerStyle={{ margin: 20 }}
          />
          <View style={{ flex: 1, margin: 20, marginLeft: 0 }}>
            <Text h4 style={{paddingLeft:10}}>{this.props.navigation.getParam('title', 'Title')}</Text>
            <View style={{marginTop:10}}>
              <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:5}}>
                <Button
                  type='outline'
                  icon={{name: 'account-plus', type: 'material-community'}}
                  title='Join'
                />
                <Button
                  type='outline'
                  icon={{name: 'plus', type: 'material-community'}}
                  title='Add Song'
                />
              </View>
              <Button
                type='outline'
                icon={{name: 'play', type: 'material-community'}}
                title='Play'
              />
              
            </View>
          </View>
        </View>
        <TabNavContainer />
      </ScrollView>
    );
  }
}

const TabNav = createMaterialTopTabNavigator(
  {
    Songs: PlaylistSongsScreen,
    Comments: PlaylistCommentsScreen
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
        if (routeName === 'Songs') {
          return <Icon name='playlist-music' type='material-community' color={tintColor}/>;
        } 
        else if (routeName === 'Comments') {
          return <Icon name='comment-outline' type='material-community' color={tintColor}/>;
        }
      },
    }),
  }
);

const TabNavContainer = createAppContainer(TabNav);

const DATA = [
  {
    key:0,
    title: 'Song 1',
    subtitle: 'Artist 1',
    image: require('../assets/empty_album_art.png'),
  },
  {
    key:1,
    title: 'Song 2',
    subtitle: 'Artist 2',
    image: require('../assets/empty_album_art.png'),
  },
];
