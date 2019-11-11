import React, {Component} from 'react';
import { FlatList, StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { SearchBar, ListItem, Button, Icon } from 'react-native-elements'

class ListElement extends Component {
  render () {
    return (
      <ListItem
        title={this.props.title}
        subtitle={this.props.subtitle}
        leftElement=
          <Image 
            source={this.props.displayPic}
            style={{width: 57,height: 57}}
          />
        rightElement=
          <View style={{flexDirection:'row'}}>
            <Text style={{color: '#aaa', textAlignVertical:'center', marginRight:5}}>{this.props.saves}</Text>
          </View>
      />
    )
  }
}

export default class SearchScreen extends Component {
  static navigationOptions = {
    title: 'Search',
    headerRight: () => (
      <Button 
        icon={ <Icon name="plus" type="material-community" size={20} color="black" /> }
        type="outline"
        onPress={() => alert('You pressed the New Playlist button!')}
        buttonStyle={{marginRight:10}}
      />
    )
  }
  render() {
    return (
        <ScrollView>
          <Search_Bar />
          <View style={{marginTop:10, marginLeft:20}}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>Recent Searches</Text>
            <FlatList 
            style={{}}
            data={DATA}
            renderItem={({ item }) => (
              <ListElement
                title={item.title}
                subtitle={item.subtitle}
                displayPic={item.displayPic}
              />
            )}
          />
          </View>
          <View style={{marginTop:10, marginLeft:20}}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>Trending Playlists</Text>
            <FlatList 
              style={{marginTop:10}}
              numColumns={3}
              data={DATA}
              renderItem={({ item }) => (
                <View style={{flex:1,marginHorizontal:5}}>
                  <Image source={item.displayPic} style={{width: 100,height: 100}}/>
                  <Text>{item.title}</Text>
                  <Text style={{color: '#aaa'}}>{item.subtitle}</Text>
                </View>
              )}
          />
          </View>
        </ScrollView>
    );
  }
}

class Search_Bar extends Component{
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Search for songs, playlists or users"
        onChangeText={this.updateSearch}
        value={search}
        lightTheme={true}
      />
    );
  }
}

const DATA = [
  {
    title: 'Playlist Title',
    subtitle: '8 songs',
    displayPic: require('../assets/empty_album_art.png'),
  },
  {
    title: 'Another Playlist Title',
    subtitle: '12 songs',
    displayPic: require('../assets/empty_album_art.png'),
  },
  {
    title: 'A Third Playlist',
    subtitle: '10 songs',
    displayPic: require('../assets/empty_album_art.png'),
  },
];
