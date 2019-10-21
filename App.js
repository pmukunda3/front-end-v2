// import React, { Component } from 'react';
// import {createAppContainer} from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
// // import Ionicons from 'react-native-vector-icons/Ionicons'
// import { Ionicons } from '@expo/vector-icons';
// // import Icon from 'react-native-ionicons'
// import FeedScreen from './components/Feed'
// import LikedScreen from './components/Liked'
// import SearchScreen from './components/Search'
// import ProfileScreen from './components/Profile'
// // For React Native
// import { withAuthenticator } from 'aws-amplify-react-native';
// import * as Facebook from 'expo-facebook';


// // class EmptyScreen extends Component {
// //   render()
// //   {
// //     return null
// //   }
// // }



// // const FeedStack = createStackNavigator({
// //   Feed: FeedScreen
// // })

// // const LikedStack = createStackNavigator({
// //   Liked: LikedScreen
// // })

// // const SearchStack = createStackNavigator({
// //   Search: SearchScreen
// // })

// // const ProfileStack = createStackNavigator({
// //   Profile: ProfileScreen
// // })

// // const TabNavigator = createBottomTabNavigator(
  
// //   {
// //   Feed: FeedStack,
// //   Liked: LikedStack,
// //   Search: SearchStack,
// //   Profile: ProfileStack
// //   },
// //   {
// //     defaultNavigationOptions: ({ navigation }) => ({
// //       tabBarIcon: ({ focused, horizontal, tintColor }) => {
// //         const { routeName } = navigation.state;
// //         let iconName;
// //         if (routeName === 'Feed') {
// //           iconName = `ios-menu`;
// //         } 
// //         else if (routeName === 'Liked') {
// //           iconName = `ios-musical-notes`;
// //         }
// //         else if (routeName === 'Search') {
// //           iconName = `ios-search`;
// //         }
// //         else if (routeName === 'Profile') {
// //           iconName = `ios-person`;
// //         }
// //         // You can return any component that you like here!
// //         return <Ionicons name={iconName} size={25} color={tintColor} />;
// //       },
// //     }),
// //     tabBarOptions: {
// //       activeTintColor: 'tomato',
// //       inactiveTintColor: 'gray',
// //       showLabel: false
// //     },
// //   }
// // )

// class App extends Component {
//   async function logIn() {
//     try {
//       const {
//         type,
//         token,
//         expires,
//         permissions,
//         declinedPermissions,
//       } = await Facebook.logInWithReadPermissionsAsync('2403128946577152', {
//         permissions: ['public_profile'],
//       });
//       if (type === 'success') {
//         // Get the user's name using Facebook's Graph API
//         const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
//         Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
//       } else {
//         // type === 'cancel'
//       }
//     } catch ({ message }) {
//       alert(`Facebook Login Error: ${message}`);
//     }
//   }
// }



// // export default createAppContainer(TabNavigator);
// export default App;
// // export default withAuthenticator(EmptyScreen);

import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, Image, Button, StyleSheet, Text, View, ImageBackground, TouchableHighlight } from 'react-native';
import { AuthSession } from 'expo';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons'
import { Ionicons } from '@expo/vector-icons';
// import Icon from 'react-native-ionicons'
import FeedScreen from './components/Feed';
import LikedScreen from './components/Liked';
import SearchScreen from './components/Search';
import ProfileScreen from './components/Profile';
import {default as TabNavigator} from './Nav';

const FB_APP_ID = '2403128946577152';

class SignInScreen extends Component {
  state = {
    userInfo: null
  };

  render() {
    
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        
        {!this.state.userInfo ? (
          
          <ImageBackground source={require('./assets/background.jpg')} style={{width: '100%', height: '100%'}}>
            <Text style={{fontFamily: 'sans-serif', paddingTop: 40, paddingBottom: 12, color: 'white', textAlign: 'center', fontWeight: 'bold', fontStyle: 'italic', fontSize: 42}}>
              BeatHarmony
            </Text>
            <Text style={{fontFamily: 'monospace', paddingBottom: 390, color: 'white', textAlign: 'center', fontSize: 20}}>
              Discover music the right way
            </Text>
            <Button style={{maxWidth: 150}} title="Continue with Facebook" onPress={this._handlePressAsync} />
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
          source={{ uri: this.state.userInfo.picture.data.url }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={{ paddingHorizontal: 20, fontSize: 20 }}>{this.state.userInfo.name}</Text>
        <Text>ID: {this.state.userInfo.id}</Text>
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
}

class MainScreen extends React.Component {
  // render() {
  //   return(
  //     <TabNavigator />
  //   )
  // }  
  // static navigationOptions = {
  //   title: 'Lots of features here',
  // };

  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
  //       <StatusBar barStyle="default" />
  //     </View>
  //   );
  // }

  // _signOutAsync = async () => {
  //   await AsyncStorage.clear();
  //   this.props.navigation.navigate('Auth');
  // };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppStack = createStackNavigator({ Main: MainScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });
const FeedStack = createStackNavigator({
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




const LikedStack = createStackNavigator({
  Liked: LikedScreen
})

const SearchStack = createStackNavigator({
  Search: SearchScreen
})

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
})

// const TabNavigator = createBottomTabNavigator(
  
//   {
//   Feed: FeedStack,
//   Liked: LikedStack,
//   Search: SearchStack,
//   Profile: ProfileStack
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === 'Feed') {
//           iconName = `ios-menu`;
//         } 
//         else if (routeName === 'Liked') {
//           iconName = `ios-musical-notes`;
//         }
//         else if (routeName === 'Search') {
//           iconName = `ios-search`;
//         }
//         else if (routeName === 'Profile') {
//           iconName = `ios-person`;
//         }
//         // You can return any component that you like here!
//         return <Ionicons name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//       showLabel: false
//     },
//   }
// )

