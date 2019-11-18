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
        user: 'Pradyumna',
        avatar: require('../assets/user_profile_pic.png')
      }
    },
    Post: PostScreen,
    Playlist: PlaylistScreen
  })

export default ProfileStack;