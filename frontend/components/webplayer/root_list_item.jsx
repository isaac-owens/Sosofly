import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistShow from "../webplayer/main/playlist_show";

class RootListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

  let reactWrapper = "react-wrapper";
  let RootlistItem = "root=list=item";
  let textWrapper = "text-wrapper";
  let playlistTitle = "playlist-title";

  let {playlist, deletePlaylistForm} = this.props;


    return (
      <div className={reactWrapper} key={playlist.id} >
        <li className={RootlistItem}>
          <div className={textWrapper}>
          <Link
            to={{
              pathname: `webplayer/playlist/${playlist.id}`,
              state:{
                playlist: "playlist",
                search: "?searchysearchy/",
                key: 51
              }
            }}
            className={playlistTitle}
          >
            {playlist.title}
          </Link>
          {deletePlaylistForm}
          </div>
        </li>
      </div>
    )
  }
}

export default RootListItem;

