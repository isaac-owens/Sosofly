import { connect } from 'react-redux';
import ArtistShow from '../../components/webplayer/artist_show';
import { fetchArtist } from '../../actions/artist_actions';

const mSTP = state => {
  // debugger
  return {
    artist: Object.values(state.entities.artist)[0],
  }
}

const mDTP = dispatch => {
  return {
    fetchArtist: artistId => dispatch(fetchArtist(artistId)),
  }
}

export default connect(mSTP, mDTP)(ArtistShow)