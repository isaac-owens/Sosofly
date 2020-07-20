import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { receivePlaylistId } from '../../actions/ui_actions';

class RootListItem extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      open: false,
      x: 0,
      y: 0,
    };
    this.handleLink = this.handleLink.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleLink(e) {
    e.preventDefault();
    const clickX = e.clientX;
    const clickY = e.clientY;
    this.setState({ open: !this.state.open, x: clickX, y: clickY });
  }

  handleDelete(playlistId) {
   return  e => {
     this.props.receivePlaylistId(playlistId); 
     this.props.deletePlaylistForm();
    };
  }

  handleUpdate(e) {
    // Second <li>
    e.stopPropagation();
    console.log("Edit form coming soon");
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
        this.setState({ open: false, x: 0, y: 0 });
      }
    };
  }

  
  
  render() {
    let reactWrapper = "react-wrapper";
    let RootlistItem = "rootlist-item";
    let textWrapper = "text-wrapper";
    let playlistTitle = "playlist-title";
    let playlistDropdown = "playlist-dropdown";
    let playlistOption = "playlist-option";
    
    let { playlist, deletePlaylistForm } = this.props;
    
  //   const myStyle = {
  //     'top': `${this.state.y}px`,
  //     'left': `${this.state.x+5}px`,
  // }

  const myStyle = {
    top:`${this.state.y - 400}px`,
    left:`${this.state.x - 100}px`,
    tabIndex: "-1",
    position: "fixed",
    opacity: "1",
    pointerEvents: "auto",
    // Need to find a way to place dynamically
    // left: 110px;
    // top: 375px;
    minWidth: "208px",
    padding: "5px 0",
    margin: "2px 0 0",
    backgroundColor: "#282828",
    backgroundClip: "padding-box",
    border: "1px solid rgba(0, 0, 0, .15)",
    borderRadius: ".25rem",
    zIndex: "3000",
    height: "86px",
    listStyle: "none",
  }
    return (
      <div
        // right click event listenter
        onContextMenu={this.handleLink}
        className={reactWrapper}
        key={playlist.id}
      >
        <li
          className={RootlistItem}
          ref={this.container}
        >
          {this.state.open ? (
            // dropdown menu
            <div>
              <ul style={myStyle}>
                {/* button that opens delete modal */}
                <li
                  className={playlistOption}
                  onClick={this.handleDelete(playlist.id)}
                >
                  Delete
                </li>
                <li 
                  className={playlistOption} 
                  onClick={this.handleUpdate}
                >
                  {/* button that opens edit modal */}
                  Rename
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
          <div 
          className={textWrapper}
          onClick={
            () => {
              this.props.fetchPlaylist(playlist.id);
              this.props.fetchPlaylistTracks(playlist.id)
            }}>
            <Link
              to={`/webplayer/playlist/${playlist.id}`}
              className={playlistTitle}
              // replace
            >
              {playlist.title}
            </Link>
            {/* {deletePlaylistForm} */}
          </div>
        </li>
      </div>
    );
  }
}

const mDTP = dispatch => {
  return {
    receivePlaylistId: (playlistId) => dispatch(receivePlaylistId(playlistId)),
  };
}
export default connect(null, mDTP)(RootListItem);

