import {createStackNavigator} from 'react-navigation-stack'
import PostScreen from './PostScreen'
import PlaylistScreen from './PlaylistScreen'
import ProfileScreen from './ProfileScreen'
import EmptyScreen from './EmptyScreen'

const ProfileStack = createStackNavigator({
    Profile: ProfileScreen,
    Post: PostScreen,
    Playlist: PlaylistScreen
  })

export default ProfileStack;