import React, {Component} from 'react';
import { Icon, SearchBar, ListItem, Avatar } from 'react-native-elements'
import { FlatList, ScrollView, StyleSheet, View, Text, Image } from 'react-native';

export default class PlaylistSongsScreen extends Component {
    render() {
        return (
            <FlatList
                data={this.props.navigation.getParam('tracks')}
                renderItem={({ item }) => (
                    <Song
                      title={item.title}
                      artist={item.artist}
                      length={item.length}
                      albumArt={item.albumArt}
                    />
                )}
            />
        );
    }
}

class Song extends Component {
    render() {
        return (
            <ListItem
                title={this.props.title}
                subtitle={this.props.artist}
                rightTitle={this.props.length}
                leftElement={
                    <Image 
                        source = {this.props.albumArt}
                        style = {{width: 50, height: 50}}
                    />
                }
            />
        )
    }
}

const DATA = [
    {
        key:0,
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        length: '5:55',
        albumArt: require('../assets/empty_album_art.png'),
    },
    {
        key:1,
        title: 'Stairway to Heaven',
        artist: 'Led Zeppelin',
        length: '8:02',
        albumArt: require('../assets/empty_album_art.png'),
    },
];