import { connect } from 'react-redux';
import ArtistShow from '../../components/webplayer/artist_show';

const mSTP = state => {
  return {
    artist: Object.values(state.entities.artist),
  }
}

const mDTP = dispatch => {
  return {

  }
}

export default connect(mSTP, mDTP)(ArtistShow)