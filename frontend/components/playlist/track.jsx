import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import PlaylistItem from './playlist_item';

class Track extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    if (typeof this.props.ref === 'undefined'){
      console.log('Ref is not here')
    }
  }

  render() {
    let trackWrapper = "track-wrapper";
    let tracklistRow = "tracklist-row";
    let tracklistColumnOuter = "tracklist-column-outer";
    let tracklistPPTopAlign = "tracklist-play-pause-top-align";
    let tracklistTopAlign = "tracklist-top-align";
    let musicDiscContainer = "music-disc-container"
    let tracklistNameBox = "tracklist-name-box";
    let tracklistNameWrapper = "tracklist-name-wrapper";
    let tracklistName = "tracklist-name";
    let tracklistNameSub = "tracklist-name-sub";
    let tracklistArtist = "tracklist-artist";
    let dotSeparator = "dot-separator";
    let tracklistAlbum = "tracklist-album";
    let tracklistMore = "tracklist-more";
    let moreEllipsis = "more-ellipsis";
    let tracklistDuration = "tracklist-duration";

    let miniDisc = <FontAwesomeIcon icon={faCompactDisc} size="1x" />;
    let moreButton = <FontAwesomeIcon icon={faEllipsisH} size="1x" />;

    let { track, title, description} = this.props;
    track = track || {};
    title = title || "Title";

    return (
      <div className={trackWrapper}>
        <div></div>
        <li className={tracklistRow}
          onClick={() => onClick(track)}>
          <div className={tracklistColumnOuter}>
            <div className={tracklistPPTopAlign}></div>
            <div className={tracklistTopAlign}>
              <span 
              className={musicDiscContainer}>{miniDisc}</span>
            </div>
          </div>
          <div className={tracklistNameBox}>
            <div className={tracklistNameWrapper}>
              <div className={tracklistName}>{title}</div>
              <audio />
              <div className={tracklistNameSub}>
                <span className={tracklistArtist}>I do not own the rights to these tasty jams.</span>
                <span className={dotSeparator}>•</span>
                <span className={tracklistAlbum}>Album Name Here</span>
              </div>
            </div>
          </div>
          <div className={tracklistMore}>
            <div className={tracklistTopAlign}>
              <button className={moreEllipsis}>{moreButton}</button>
            </div>
          </div>
          <div className={tracklistDuration}>
            <span>4:44</span>
          </div>
        </li>
      </div>
    );
  }
}

export default Track;