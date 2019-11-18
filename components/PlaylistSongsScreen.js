import React, {Component} from 'react';
import { Icon, SearchBar, ListItem, Avatar } from 'react-native-elements'
import { FlatList, ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import WebView from 'react-native-webview'

export default class PlaylistSongsScreen extends Component {
    render() {
        return (
            <>
            <WebView 
                style={styles.item}
                ref={webview => {
                    this.webView = webview;
                }}
                onLoadEnd={this.onWebViewLoad}
                onMessage={this.messageEvent}
                startInLoadingState={true}
                javaScriptEnabled={true}
                source={{html: '<iframe src="https://www.youtube.com/embed/Nauusq5yCi0" allow="autoplay; encrypted-media"></iframe>'}}
            />
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
            />
            <WebView 
                style={styles.item}
                ref={webview => {
                    this.webView = webview;
                }}
                onLoadEnd={this.onWebViewLoad}
                onMessage={this.messageEvent}
                startInLoadingState={true}
                javaScriptEnabled={true}
                source={{html: '<iframe src="https://open.spotify.com/embed/track/35bNJROxx1h4Y72yG3xShY" allow="autoplay; encrypted-media"></iframe>'}}
            />
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
            />
            <WebView 
                style={styles.item}
                ref={webview => {
                    this.webView = webview;
                }}
                onLoadEnd={this.onWebViewLoad}
                onMessage={this.messageEvent}
                startInLoadingState={true}
                javaScriptEnabled={true}
                source={{html: '<iframe src="https://www.youtube.com/embed/OWl9p3oFKgg" allow="autoplay; encrypted-media"></iframe>'}}
            />
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
            />
            <WebView 
                style={styles.item}
                ref={webview => {
                    this.webView = webview;
                }}
                onLoadEnd={this.onWebViewLoad}
                onMessage={this.messageEvent}
                startInLoadingState={true}
                javaScriptEnabled={true}
                source={{html: '<iframe src="https://open.spotify.com/embed/album/5Ursk5eZB3amijmJSPFdzG" allow="autoplay; encrypted-media"></iframe>'}}
            />
            </>
            // <FlatList
            //     data={[
            //         {key: '<iframe src="https://www.youtube.com/embed/cqyziA30whE" allow="autoplay; encrypted-media"></iframe>'},
            //         {key: '<iframe src="https://www.youtube.com/embed/Nauusq5yCi0" allow="autoplay; encrypted-media"></iframe>'},
            //         {key: '<iframe src="https://www.youtube.com/embed/cqyziA30whE" allow="autoplay; encrypted-media"></iframe>'},
            //     ]}
            //     renderItem={({item}) => 
            //     <WebView 
            //         style={{width: 1000, marginHorizontal: 40}}
            //         ref={webview => {
            //             this.webView = webview;
            //         }}
            //         onLoadEnd={this.onWebViewLoad}
            //         onMessage={this.messageEvent}
            //         startInLoadingState={true}
            //         javaScriptEnabled={true}
            //         source={{html: item.key}}
            //     />}
            // />





            
            // <FlatList
            //     data={DATA}
            //     renderItem={({ item }) => (
            //         <Song
            //           title={item.title}
            //           artist={item.artist}
            //           length={item.length}
            //           albumArt={item.albumArt}
            //         />
            //     )}
            // />
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

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    width: 1000, height: 115, marginHorizontal: 40, marginVertical: 20 
  },
})

// <WebView
//                 style={{width: 1000, marginHorizontal: 40}}
//                 ref={webview => {
//                     this.webView = webview;
//                 }}
//                 onLoadEnd={this.onWebViewLoad}
//                 onMessage={this.messageEvent}
//                 startInLoadingState={true}
//                 javaScriptEnabled={true}
//                 source={{html: `<iframe src="https://www.youtube.com/embed/cqyziA30whE" allow="autoplay; encrypted-media"></iframe>`}}
//             />