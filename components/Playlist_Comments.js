import React, {Component} from 'react';
import { Icon, SearchBar, ListItem, Avatar, Input, Button } from 'react-native-elements'
import { FlatList, ScrollView, StyleSheet, View, TextInput, Image, KeyboardAvoidingView } from 'react-native';

export default class PlaylistCommentsScreen extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={{flex:1}} behavior='padding'>
                <ScrollView contentContainerStyle={{justifyContent:'flex-end'}}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => (
                            <Comment
                            userDisplayPic={item.userDisplayPic}
                            userName={item.userName}
                            text={item.text}
                            timestamp={item.timestamp}
                            />
                        )}
                    />
                    <View style={{flexDirection:'row'}}>
                        <Input
                            style={{marginTop:10}}
                            multiline={true}
                            placeholder='Type a comment'
                        />
                        <Button
                            icon={{name: 'plus', type: 'material-community'}}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

class Comment extends Component {
    render() {
        return (
            <ListItem
                leftElement = {
                    <Avatar rounded 
                        source = {this.props.userDisplayPic}
                        size = 'medium'
                    />
                }
                title={this.props.userName}
                // titleStyle={{fontWeight: 'bold'}}
                subtitle={this.props.text}
                // subtitleStyle={{color:'black'}}
                rightTitle={this.props.timestamp}
            />
        )
    }
}

const DATA = [
    {
        key:0,
        userName: 'Some Dude',
        userDisplayPic: require('../assets/empty_profile_pic.png'),
        text: 'Awesome!',
        timestamp: '2 minutes ago',
    },
    {
        key:1,
        userName: 'Some other Dude',
        userDisplayPic: require('../assets/empty_profile_pic.png'),
        text: 'Cool !!',
        timestamp: '1 hour ago',
    },
];