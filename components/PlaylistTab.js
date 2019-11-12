import {createStackNavigator} from 'react-navigation-stack'
import LikedScreen from './Liked'
import NewPlaylistScreen from './NewPlaylistScreen'

const LikedStack = createStackNavigator({
  Liked: LikedScreen,
  NewPlaylist: NewPlaylistScreen
})

export default LikedStack;