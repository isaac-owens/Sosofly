import { connect } from 'react-redux';
import ArtistShow from '../../components/webplayer/artist_show';
import { fetchArtist } from '../../actions/artist_actions';
import { fetchAlbums } from '../../actions/album_actions';

const mSTP = state => {
  return {
    artist: Object.values(state.entities.artist)[0],
    albums: state.entities.album,
  }
}

const mDTP = dispatch => {
  return {
    fetchArtist: artistId => dispatch(fetchArtist(artistId)),
    fetchAlbums: () => dispatch(fetchAlbums()),
  }
}

export default connect(mSTP, mDTP)(ArtistShow)