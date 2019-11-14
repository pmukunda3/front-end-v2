import {createStackNavigator} from 'react-navigation-stack'
import SearchScreen from './Search'
import NewPlaylistScreen from './NewPlaylistScreen'
import EmptyScreen from './EmptyScreen'
import PlaylistScreen from './PlaylistScreen'

const SearchStack = createStackNavigator({
  Search: SearchScreen,
  NewPlaylist: NewPlaylistScreen,
  Playlist: PlaylistScreen
})

export default SearchStack;