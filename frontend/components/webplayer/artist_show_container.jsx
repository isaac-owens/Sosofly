import { connect } from 'react-redux';
import ArtistShow from '../../components/webplayer/artist_show';
import { fetchArtist } from '../../actions/artist_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { getArtist, getArtistAlbums } from  '../../reducers/selectors';

const mSTP = state => {
  return {
    artist: getArtist(state),
    albums: getArtistAlbums(state),
  }
}

const mDTP = dispatch => {
  return {
    fetchArtist: artistId => dispatch(fetchArtist(artistId)),
    fetchAlbums: () => dispatch(fetchAlbums()),
  }
}

export default connect(mSTP, mDTP)(ArtistShow)