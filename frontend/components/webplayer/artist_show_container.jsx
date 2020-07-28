import { connect } from 'react-redux';
import ArtistShow from '../../components/webplayer/artist_show';

const mSTP = state => {
  return {
    artist: Object.values(state.entities.artist),
  }
}

const mDTP = dispatch => {
  return {
    fetchArtist: artistId => dispatch(fetchArtist(artistId)),
  }
}

export default connect(mSTP, mDTP)(ArtistShow)