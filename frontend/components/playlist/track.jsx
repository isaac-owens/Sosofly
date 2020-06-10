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
            <div></div>
            <div></div>
            <div></div>
          </li>
      </div>
    )
  }
}

export default Track;