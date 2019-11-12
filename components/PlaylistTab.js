import {createStackNavigator} from 'react-navigation-stack'
import LikedScreen from './Liked'
import NewPlaylistScreen from './NewPlaylistScreen'
import EmptyScreen from './EmptyScreen'
import PlaylistScreen from './PlaylistScreen'

const LikedStack = createStackNavigator({
  Liked: LikedScreen,
  NewPlaylist: NewPlaylistScreen,
  Playlist: PlaylistScreen
})

export default LikedStack;