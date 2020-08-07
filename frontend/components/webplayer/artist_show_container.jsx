import { connect } from 'react-redux';
import ArtistShow from '../../components/webplayer/artist_show';
import { fetchArtist } from '../../actions/artist_actions';
import { fetchAlbums } from '../../actions/album_actions';

const mSTP = state => {
  return {
    artist: Object.values(state.entities.artist)[0],
    // albums: Object.values(state.entities.artist)[0].albumIds.map(albumId => {
    //   return state.entities.album[albumId]
    // })
  }
}

const mDTP = dispatch => {
  return {
    fetchArtist: artistId => dispatch(fetchArtist(artistId)),
    fetchAlbums: () => dispatch(fetchAlbums()),
  }
}

export default connect(mSTP, mDTP)(ArtistShow)