import React, { Component } from 'react';
import { Text, View, TextInput, FlatList, ScrollView } from 'react-native';
import { Input, Image, ListItem, Button } from 'react-native-elements';

export default class NewPlaylistScreen extends Component {
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
      title: 'New Playlist',
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
            <Input
              inputContainerStyle={{
                borderColor: '#aaa',
                borderWidth: 1,
                paddingLeft: 10,
              }}
              placeholder="Playlist Title"
              onChangeText={text => this.setState({ title: text })}
              value={this.state.title}
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
              onChangeText={text => this.setState({ description: text })}
              value={this.state.description}
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
