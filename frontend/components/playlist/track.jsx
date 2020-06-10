import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";

class Track extends React.Component {
  constructor(props) {
    super(props);
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

    let miniDisc = <FontAwesomeIcon icon={faCompactDisc} size="1x" />;
    return (
      <div className={trackWrapper}>
        <div></div>
        <li className={tracklistRow}>
          <div className={tracklistColumnOuter}>
            <div className={tracklistPPTopAlign}></div>
            <div className={tracklistTopAlign}>
              <span className={musicDiscContainer}>{miniDisc}</span>
            </div>
          </div>
          <div className={tracklistNameBox}>
            <div className={tracklistNameWrapper}>
              <div className={tracklistName}>Track Name</div>
              <div className={tracklistNameSub}>
                <span className={tracklistArtist}>I do not own the rights to these tasty jams.</span>
                <span className={dotSeparator}>•</span>
                <span className={tracklistAlbum}>Album Name Here</span>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
        </li>
      </div>
    );
  }
}

export default Track;