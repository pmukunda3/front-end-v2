import React, { Component } from 'react';
import { Text, View, TextInput, FlatList } from 'react-native';
import { Input, Image, ListItem } from 'react-native-elements';

export default class NewPlaylistScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'New Playlist',
    };
  };
  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row', height: 200 }}>
          <Image
            source={require('../assets/empty_album_art.png')}
            style={{ width: 150, height: 150 }}
            containerStyle={{ margin: 20 }}
          />
          <View style={{ flex: 1, margin: 20, marginLeft: 0 }}>
            <Input
              inputContainerStyle={{
                borderColor: '#aaa',
                borderWidth: 1,
                paddingLeft: 10,
              }}
              placeholder="Playlist Title"
            />
            <Input
              containerStyle={{ flex: 1 }}
              inputContainerStyle={{
                flex: 1,
                borderColor: '#aaa',
                borderWidth: 1,
                padding: 10,
                marginVertical: 10,
                textAlignVertical: 'top',
              }}
              placeholder="Description"
              multiline={true}
            />
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
      </View>
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
