import React, {Component} from 'react';
import { Icon, SearchBar, ListItem, Avatar } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { FlatList, ScrollView, StyleSheet, View, Text, Image } from 'react-native';

class ListElement extends Component {
  render () {
    return (
      <ListItem
        onPress={() => alert('You pressed the Notification!')}
        title={this.props.title}
        leftElement=<Avatar rounded icon={{name: 'person', type: 'material'}} size="small"/>
        rightTitle={this.props.timestamp}
      />
    )
  }
}

export default class NotificationsScreen extends Component {
  render() {
    return (
        <ScrollView>
          <Text style={{fontSize:18, fontWeight:'bold', marginLeft:20, marginTop:20}}>Notifications</Text>
          <FlatList 
            style={{}}
            data={DATA}
            renderItem={({ item }) => (
              <ListElement
                title={item.title}
                timestamp={item.timestamp}
              />
            )}
          />
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
        placeholder="Search in your Liked Playlists"
        onChangeText={this.updateSearch}
        value={search}
        lightTheme={true}
      />
    );
  }
}

const DATA = [
  {
    title: 'Michael M. liked your playlist Serenity By Jan.',
    timestamp: '1h'
  },
  {
    title: 'Mallika S. liked your playlist Serenity By Jan.',
    timestamp: '1h'
  },
  {
    title: 'Mina M. liked your playlist Spanish Summer.',
    timestamp: '2h'
  },
  {
    title: 'Kai C. added you as a trusted curator.',
    timestamp: '5h'
  },
  {
    title: 'Ivan B. liked your playlist Serenity by Jan.',
    timestamp: '10h'
  },
  {
    title: 'Brandon G. added you as a trusted curator.',
    timestamp: '10h'
  },
];
