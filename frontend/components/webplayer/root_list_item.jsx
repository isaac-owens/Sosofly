import React from 'react';
import { Link } from 'react-router-dom';

class RootListItem extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      open: false,
    };
    this.handleLink = this.handleLink.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDelete = this.handleUpdate.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleLink() {
    this.setState({ open: !this.state.open });
    // return false;
  }

  handleDelete(playlistId) {
    this.props.openModal("deletePlaylist", playlistId);
  }

  handleUpdate() {
    console.log("Update form coming soon");
  }

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

    let { currentUser, playlist, deletePlaylistForm } = this.props;

    return (
      <div
        onMouseEnter={this.handleLink}
        className={reactWrapper}
        key={playlist.id}
      >
        <li
          // onContextMenu={() => this.handleLinkClick()}
          className={RootlistItem}
          ref={this.container}
        >
          {this.state.open ? (
            <div className={playlistDropdown}>
              <ul>
                <li
                  className={playlistOption}
                  onClick={() => this.handleDelete(playlist.id)}
                >
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
