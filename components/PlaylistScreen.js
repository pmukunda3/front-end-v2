import React, { Component } from 'react';
import { View, FlatList, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Text,  Input, Image, ListItem, Button, Icon, Avatar } from 'react-native-elements';
import {createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import EmptyScreen from './EmptyScreen';
import PlaylistSongsScreen from './PlaylistSongsScreen';
import PlaylistCommentsScreen from './PlaylistCommentsScreen';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class PlaylistScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#316D88',
      },
      title:  'Playlist',
    };
  };
  render() {
    return (
      <ScrollView>
        <View style={{ flexDirection: 'row', flex:1 }}>
          <Image
            source={require('../assets/empty_album_art.png')}
            style={{ width: 150, height: 150 }}
            containerStyle={{ margin: 20 }}
          />
          <View style={{ flex: 1, margin: 20, marginLeft: 0 }}>
            <Text h4 style={{paddingLeft:10}}>{this.props.navigation.getParam('title', 'Title')}</Text>
            <TouchableHighlight onPress={() => this.onUserPress()}>
              <View style={{padding:10, flexDirection:'row', alignItems:'center'}}>
                <Avatar rounded
                  source={this.props.navigation.getParam('avatar',require('../assets/empty_profile_pic.png'))}
                  size="small"
                />
                <Text style={{color: 'gray', paddingLeft:10, fontWeight:'bold'}}>
                  {this.props.navigation.getParam('user','user')}
                </Text>
              </View>
            </TouchableHighlight>
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
  onUserPress() {
    this.props.navigation.push('Profile',
    {
      user: this.props.navigation.getParam('user'),
      avatar: this.props.navigation.getParam('avatar')
    })
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

