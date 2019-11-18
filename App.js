import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, Image, Button, StyleSheet, Text, View, ImageBackground, TouchableHighlight, TouchableOpacity } from 'react-native';
import { AuthSession } from 'expo';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons'
import FeedStack from './components/FeedTab'
import LikedStack from './components/PlaylistTab'
import SearchStack from './components/ExploreTab'
import ProfileStack from './components/ProfileStack';
import {default as TabNavigator} from './Nav';
import axios from 'axios';

const FB_APP_ID = '2403128946577152';
const SPOTID = 'f40a4bd2951b44cda131c17140264385';

class SignInScreen extends Component {
  state = {
    userInfo: null,
    didError: false
  };

  displayError = () => {
    return (
      <View style={styles.userInfo}>
        <Text style={styles.errorText}>
          There was an error, please try again.
        </Text>
      </View>
    );
  }

  // displayResults = () => {
  //   { return this.state.userInfo ? (
  //     <View style={styles.userInfo}>
  //       <Image
  //         style={styles.profileImage}
  //         source={ {'uri': this.state.userInfo.images[0].url} }
  //       />
  //       <View>
  //         <Text style={styles.userInfoText}>
  //           Username:
  //         </Text>
  //         <Text style={styles.userInfoText}>
  //           {this.state.userInfo.id}
  //         </Text>
  //         <Text style={styles.userInfoText}>
  //           Email:
  //         </Text>
  //         <Text style={styles.userInfoText}>
  //           {this.state.userInfo.email}
  //         </Text>
  //       </View>
  //       <Text style={{ paddingBottom: 7}}>  Welcome! You are now signed in.</Text>
  //       <Button title="Continue to BeatHarmony" onPress={this._showMoreApp} />
  //     </View>
  //   ) : (
  //     <View style={styles.userInfo}>
  //       <Text style={styles.userInfoText}>
  //         Login to Spotify to see user data.
  //       </Text>
  //     </View>
  //   )}
  // }

  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <ImageBackground source={require('./assets/background.jpg')} style={{width: '100%', height: '100%'}}>
  //           <Text style={{fontFamily: 'sans-serif', paddingTop: 40, paddingBottom: 12, color: 'white', textAlign: 'center', fontWeight: 'bold', fontStyle: 'italic', fontSize: 42}}>
  //             BeatHarmony
  //           </Text>
  //           <Text style={{fontFamily: 'monospace', paddingBottom: 390, color: 'white', textAlign: 'center', fontSize: 20}}>
  //             Discover music the right way
  //           </Text>
  //           <TouchableOpacity
  //             style={styles.button}
  //             onPress={this.handleSpotifyLogin}
  //             disabled={this.state.userInfo ? true : false}
  //           >
  //             <Text style={styles.buttonText}>
  //               Login with Spotify
  //             </Text>
  //           </TouchableOpacity>
  //         </ImageBackground>
  //       {this.state.didError ?
  //         this.displayError() :
  //         this.displayResults()
  //       }
  //     </View>
  //   );
  // }

  

  render() {
    
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        
        {!this.state.userInfo ? (
          
          <ImageBackground source={require('./assets/background3.jpg')} style={{width: '100%', height: '100%'}}>
            <Image 
              style={{width: 350, height: 50, marginTop: 132, marginHorizontal: 32}}
              source={require('./assets/harmonize.png')}
            >
            </Image>
            <Text style={{fontFamily: 'monospace', paddingTop: 20, paddingBottom: 40, color: 'white', textAlign: 'center', fontStyle: 'italic', fontSize: 20}}>
              Discover music the right way
            </Text>
            <TouchableOpacity
              onPress={this._handlePressAsync}
              disabled={this.state.userInfo ? true : false}
            >
              <Image
                style={styles.button}
                source={{uri: 'https://i.imgur.com/zLJoAYf.png'}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.handleSpotifyLogin}
              disabled={this.state.userInfo ? true : false}
            >
              <Image
                style={styles.button}
                source={{uri: 'https://i.imgur.com/RzBynu5.png'}}
              />
            </TouchableOpacity>
          </ImageBackground>
        ) : (
          this._renderUserInfo()
        )}
      </View>
    );
  }

  _renderUserInfo = () => {
    return (
      <View style={{ alignItems: 'center' }}>
        <Image
          source={{ uri: this.state.userInfo.images[0].url }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={{ paddingHorizontal: 20, fontSize: 20 }}>{this.state.userInfo.display_name}</Text>
        <Text style={{ paddingBottom: 7}}>  Welcome! You are now signed in.</Text>
        <Button title="Continue to BeatHarmony" onPress={this._showMoreApp} />
      </View>
    );
  };

  _showMoreApp = () => {
    this.props.navigation.navigate('Yeet');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  _handlePressAsync = async () => {
    let redirectUrl = AuthSession.getRedirectUrl();

    // You need to add this url to your authorized redirect urls on your Facebook app
    console.log({
      redirectUrl
    });

    // NOTICE: Please do not actually request the token on the client (see:
    // response_type=token in the authUrl), it is not secure. Request a code
    // instead, and use this flow:
    // https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow/#confirm
    // The code here is simplified for the sake of demonstration. If you are
    // just prototyping then you don't need to concern yourself with this and
    // can copy this example, but be aware that this is not safe in production.

    let result = await AuthSession.startAsync({
      authUrl:
        `https://www.facebook.com/v2.8/dialog/oauth?response_type=token` +
        `&client_id=${FB_APP_ID}` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
    });

    if (result.type !== 'success') {
      alert('Uh oh, something went wrong');
      return;
    }

    

    let accessToken = result.params.access_token;
    let userInfoResponse = await fetch(
      `https://graph.facebook.com/me?access_token=${accessToken}&fields=id,name,picture.type(large)`
    );
    const userInfo = await userInfoResponse.json();
    this.setState({ userInfo });
    // if (result.type !== 'success' && this.state.userInfo !== null) {
    //   alert('yeeeeeeeeet');
    //   this._renderUserInfo();
    //   this.props.navigation.navigate('App');
    // }
  };

  handleSpotifyLogin = async () => {
    let redirectUrl = AuthSession.getRedirectUrl();
    let results = await AuthSession.startAsync({
      authUrl: `https://accounts.spotify.com/authorize?client_id=${SPOTID}&redirect_uri=${encodeURIComponent(redirectUrl)}&scope=user-read-email&response_type=token`
    });
    if (results.type !== 'success') {
      console.log(results.type);
      this.setState({ didError: true });
    } else {
      const userInfo = await axios.get(`https://api.spotify.com/v1/me`, {
        headers: {
          "Authorization": `Bearer ${results.params.access_token}`
        }
      });
      // this.setState({ userInfo });
      this.setState({ userInfo: userInfo.data });
    }
  };
}


class MainScreen extends React.Component {
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  container: {
    flexDirection: 'column',
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    padding: 20,
    height: 64, 
    width: 350,
    marginBottom: 30,
    marginHorizontal: 33,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 21,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppStack = createStackNavigator({ Main: MainScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });
const Feedack = createStackNavigator({
  Yeet: TabNavigator
})

export default createAppContainer(createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
    Yeet: TabNavigator,
  },
  {
    initialRouteName: 'Auth',
  }
));

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'column',
//     backgroundColor: '#000',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'space-evenly',
//   },
//   button: {
//     backgroundColor: '#2FD566',
//     padding: 20
//   },
//   buttonText: {
//     color: '#000',
//     fontSize: 20
//   },
//   userInfo: {
//     height: 250,
//     width: 200,
//     alignItems: 'center',
//   },
//   userInfoText: {
//     color: '#fff',
//     fontSize: 18
//   },
//   errorText: {
//     color: '#fff',
//     fontSize: 18
//   },
//   profileImage: {
//     height: 64,
//     width: 64,
//     marginBottom: 32
//   }
// });