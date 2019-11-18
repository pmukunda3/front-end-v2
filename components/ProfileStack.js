import {createStackNavigator} from 'react-navigation-stack'
import PostScreen from './PostScreen'
import PlaylistScreen from './PlaylistScreen'
import ProfileScreen from './ProfileScreen'
import EmptyScreen from './EmptyScreen'

const ProfileStack = createStackNavigator({
    Profile: 
    {
      screen: ProfileScreen,
      params: 
      { 
        user: 'Ankit',
        avatar: require('../assets/ankit.jpg')
      }
    },
    Post: PostScreen,
    Playlist: PlaylistScreen
  })

export default ProfileStack;