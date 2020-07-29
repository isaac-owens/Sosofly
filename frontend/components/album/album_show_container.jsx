import { connect } from 'react-redux';
import AlbumShow from '../../components/album/album_show';
import { fetchAlbum } from '../../actions/album_actions';

const mSTP = state => {
  return {
    album: Object.values(state.entities.album)[0],
  }
}

const mDTP = dispatch => {
  return {
    fetchAlbum: albumId => dipsatch(fetchAlbum(albumId)),
  }
}

export default connect(mSTP, mDTP)(AlbumShow)