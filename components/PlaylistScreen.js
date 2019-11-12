import React, { Component } from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import { Text,  Input, Image, ListItem, Button } from 'react-native-elements';

export default class PlaylistScreen extends Component {
  state: {
    title: string,
    description: boolean,
  };
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
  }
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
            <Text h4 style={{paddingLeft:10}}>Title</Text>
            <Text style={{paddingLeft:10, marginVertical:10}}>Subtitle</Text>
          </View>
        </View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subtitle={item.subtitle}
              leftElement=<Image
                source={item.image}
                style={{ width: 50, height: 50 }}
              />
            />
          )}
        />
        <Button
          state={this.state}
          buttonStyle={{ margin: 20 }}
          title="Create Playlist"
          onPress={() => this.onPress()}
        />
      </ScrollView>
    );
  }
  onPress() {
    alert(
      'Title: ' + this.state.title + '\nDescription: ' + this.state.description
    );
  }
}

const DATA = [
  {
    title: 'Song 1',
    subtitle: 'Artist 1',
    image: require('../assets/empty_album_art.png'),
  },
  {
    title: 'Song 2',
    subtitle: 'Artist 2',
    image: require('../assets/empty_album_art.png'),
  },
];
