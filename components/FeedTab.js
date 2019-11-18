import {createStackNavigator} from 'react-navigation-stack'
import PostScreen from './PostScreen'
import PlaylistScreen from './PlaylistScreen'
import FeedScreen from './FeedScreen'
import ProfileScreen from './ProfileScreen'
import EmptyScreen from './EmptyScreen'

const FeedStack = createStackNavigator({
  Feed: FeedScreen,
  Post: PostScreen,
  Playlist: PlaylistScreen,
  Profile : ProfileScreen
})

export default FeedStack;