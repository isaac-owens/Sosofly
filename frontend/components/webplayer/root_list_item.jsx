import React from 'react';
import { Link } from 'react-router-dom';

class RootListItem extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      open: false,
    };
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDelete = this.handleUpdate.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleLinkClick() {
    this.setState({ open: !this.state.open });
    return false;
  }

  handleDelete() {}

  handleUpdate() {}

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside());
  }
  
  handleClickOutside() {
    return (e) => {
      if (
        this.container.current &&
        !this.container.current.contains(e.target)
      ) {
        this.setState({ open: false });
      }
    };
  }

  render() {
    let reactWrapper = "react-wrapper";
    let RootlistItem = "root=list=item";
    let textWrapper = "text-wrapper";
    let playlistTitle = "playlist-title";
    let playlistDropdown = "playlist-dropdown";
    let playlistOption = "playlist-option";

    let { playlist, deletePlaylistForm } = this.props;

    return (
      <div className={reactWrapper} key={playlist.id}>
        <li
          onContextMenu={this.handleLinkClick}
          className={RootlistItem}
          ref={this.container}
        >
          {this.state.open ? (
            <div className={playlistDropdown}>
              <ul>
                <li className={playlistOption} onClick={this.handleDelete}>
                  Delete
                </li>
                <li className={playlistOption} onClick={this.handleUpdate}>
                  Rename
                </li>
              </ul>
            </div>
          ) : (
            <div></div>
          )}
          <div className={textWrapper}>
            <Link
              to={`webplayer/playlist/${playlist.id}`}
              className={playlistTitle}
            >
              {playlist.title}
            </Link>
            {deletePlaylistForm}
          </div>
        </li>
      </div>
    );
  }
}

export default RootListItem;
