import { connect } from 'react-redux';
import ArtistShow from '../../components/webplayer/artist_show';
import { fetchArtist } from '../../actions/artist_actions';
import { fetchAlbums } from '../../actions/album_actions';

const mSTP = state => {
  const artist = Object.values(state.entities.artist)[0]
  return {
    artist: artist,
    // albums: artist[albumIds].map(albumId => {
    //   return state.entities.album[albumId]
    // }),
  }
}

const mDTP = dispatch => {
  return {
    fetchArtist: artistId => dispatch(fetchArtist(artistId)),
    fetchAlbums: () => dispatch(fetchAlbums()),
  }
}

export default connect(mSTP, mDTP)(ArtistShow)