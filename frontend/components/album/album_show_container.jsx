import { connect } from 'react-redux';
import AlbumShow from '../../components/album/album_show';
import { openModal, closeModal } from '../../actions/modal_actions';

import { fetchAlbum } from '../../actions/album_actions';
import { fetchAlbumTracks } from '../../actions/track_actions';

const mSTP = state => {
  return {
    tracks: Object.values(state.entities.tracks),
    album: Object.values(state.entities.album)[0],
  }
}

const mDTP = dispatch => {
  return {
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
    fetchAlbumTracks: albumId => dispatch(fetchAlbumTracks(albumId)),
    addTrackModal: () => dispatch(openModal("addPlaylistTrack")),
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(mSTP, mDTP)(AlbumShow);